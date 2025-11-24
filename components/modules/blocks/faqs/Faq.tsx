"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    id: string;
    question: string;
    answer: string | React.ReactNode;
    category: FAQCategory;
}

type FAQCategory = 'getting-started' | 'billing' | 'features' | 'support';

const CATEGORIES: Record<FAQCategory, { label: string; color: string }> = {
    'getting-started': { label: 'Getting Started', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' },
    'billing': { label: 'Billing', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' },
    'features': { label: 'Features', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' },
    'support': { label: 'Support', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300' },
};

const FAQ_ITEMS: FAQItemProps[] = [
    {
        id: "getting-started-1",
        category: "getting-started",
        question: "How do I get started with the platform?",
        answer: "Getting started is easy! Simply sign up for an account and follow our quick setup guide. We'll walk you through each step of the process.",
    },
    {
        id: "billing-1",
        category: "billing",
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    },
    {
        id: "features-1",
        category: "features",
        question: "What are the key features?",
        answer: "Our platform includes real-time analytics, team collaboration tools, automated workflows, and customizable dashboards.",
    },
    {
        id: "support-1",
        category: "support",
        question: "How can I get help?",
        answer: "Our support team is available 24/7 through our help center, email support, or live chat. We typically respond within 2 hours.",
    },
];

function CategoryBadge({ category }: { category: FAQCategory }) {
    return (
        <Badge 
            variant="secondary" 
            className={cn("mr-2 font-normal", CATEGORIES[category].color)}
        >
            {CATEGORIES[category].label}
        </Badge>
    );
}

function FAQItem({ id, question, answer, category }: FAQItemProps) {
    return (
        <AccordionItem 
            value={id}
            className="bg-white dark:bg-gray-800/50 rounded-lg shadow-xs border border-gray-200 dark:border-gray-700 px-4"
        >
            <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex flex-col items-start gap-2 text-left">
                    <CategoryBadge category={category} />
                    <span className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary transition-colors">
                        {question}
                    </span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed prose dark:prose-invert max-w-none pb-4">
                {answer}
            </AccordionContent>
        </AccordionItem>
    );
}
 
export const Faq01 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | "all">(
    "all"
  );

  const filteredFAQs = FAQ_ITEMS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(faq.answer).toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-black/10 dark:to-black/20 w-full"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            id="faq-heading"
            className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Find answers to common questions about our platform.
          </p>
        </div>

        {/* Search + Categories */}
        <div className="mb-10 space-y-5">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="search"
              placeholder="Search FAQs..."
              className="pl-10 py-3 rounded-xl border-gray-200 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className={cn(
                "cursor-pointer rounded-lg px-3 py-1.5 transition-all",
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
              )}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </Badge>

            {Object.entries(CATEGORIES).map(([key, { label, color }]) => (
              <Badge
                key={key}
                variant="outline"
                className={cn(
                  "cursor-pointer rounded-lg px-3 py-1.5 transition-all",
                  selectedCategory === key
                    ? `${color} text-white border-transparent`
                    : "bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
                )}
                onClick={() => setSelectedCategory(key as FAQCategory)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {filteredFAQs.map((faq) => (
            <FAQItem key={faq.id} {...faq} />
          ))}
        </Accordion>

        {/* Empty State */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            No FAQs found matching your search criteria.
          </div>
        )}
      </div>
    </section>
  );
};


