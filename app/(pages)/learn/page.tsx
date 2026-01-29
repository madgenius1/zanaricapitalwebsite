
import { learnMetadata } from '../../../lib/metadata';
export const metadata = learnMetadata;

import Glossary from "@/app/components/ui/learn/Glossary";
import HeroLearn from "@/app/components/ui/learn/HeroLearn";
import LearnFooter from "@/app/components/ui/learn/LearnFooter";
import LearningPaths from "@/app/components/ui/learn/LearningPaths";
import MarketInsight from "@/app/components/ui/learn/MarketInsight";
import RafikiAI from "@/app/components/ui/learn/RafikiAI";

export default function Page() {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <HeroLearn />
      <LearningPaths />
      <Glossary />
      <MarketInsight />
      <RafikiAI />
      <LearnFooter />
    </main>
  );
}
