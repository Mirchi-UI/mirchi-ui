"use server";

import path from "path";
import { promises as fs } from "fs";
import { cache } from "react";

// Create a cached version of the file reading operation
const readFileCache = cache(async (filePath: string) => {
  return await fs.readFile(filePath, "utf-8");
});

// Improve caching for the entire component getter
export const getComponent = async (fileName: string | null, folder: string) => {
  const baseDir = path.join(process.cwd(), "components/modules");
  if (!fileName || fileName === "undefined") {
    const fullPath = path.join(baseDir, `${folder}.tsx`);
    // console.log("fullPath", fullPath);
    return await readFileCache(fullPath);
  }

  console.log("here");
  const fullPath = path.join(baseDir, folder, `${fileName}.tsx`);

  return await readFileCache(fullPath);
};

// Get component code from modules directory for preview
export const getComponentCode = async (link: string) => {
 

  console.log("link", link);
  try {
    // Handle links like "background-circles" or "buttons/loading-button"
    const parts = link.split("/");
    let fullPath: string;
    
    if (parts.length === 1) {
      // Single file like "background-circles" -> components/modules/background-circles.tsx
      fullPath = path.join(process.cwd(), "components/modules", `${parts[0]}.tsx`);
    } else {
      // Nested file like "buttons/loading-button" -> components/modules/buttons/loading-button.tsx
      const [folder, filename] = parts;
      fullPath = path.join(process.cwd(), "components/modules", folder, `${filename}.tsx`);
    }
    console.log("fullPath", fullPath);
    return await readFileCache(fullPath);
  } catch (error) {
    console.error("Error reading component code:", error);
    return null;
  }
};

export type CopyComponentState = {
  error: string;
  content: string;
  success: boolean;
};

export const copyComponent = async (
  prevState: CopyComponentState,
  formData: FormData
) => {
  try {
    const folder = formData.get("folder");
    const fileName = formData.get("fileName");

    if (!folder && !fileName) {
      return {
        error: "Folder or file name not found",
        content: "",
        success: false,
      };
    }

    const content = await getComponent(fileName as string, folder as string);

    if (!content) {
      return {
        error: "Component not found",
        content: "",
        success: false,
      };
    }

    return {
      error: "",
      content: content,
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to copy component",
      content: "",
      success: false,
    };
  }
};
