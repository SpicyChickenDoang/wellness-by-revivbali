import type { LucideProps } from "lucide-react";
import { Zap, Sparkles, BatteryCharging, Plane, Dna } from "lucide-react";

export const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  'nad-reboot-100': Sparkles,
  'nad-restore-200': BatteryCharging,
  'nad-revive-250': Plane,
  'nad-regenerate-500': Dna,
  'nad-elite-750': Zap,
};

export const slugToColor: { [key: string]: string } = {
  'nad-reboot-100': 'text-blue-400',
  'nad-restore-200': 'text-purple-500',
  'nad-revive-250': 'text-orange-500',
  'nad-regenerate-500': 'text-red-500',
  'nad-elite-750': 'text-green-500',
};

export const slugToGradient: { [key: string]: string } = {
  'nad-reboot-100': 'from-blue-500/10 to-card',
  'nad-restore-200': 'from-purple-500/10 to-card',
  'nad-revive-250': 'from-orange-500/10 to-card',
  'nad-regenerate-500': 'from-red-500/10 to-card',
  'nad-elite-750': 'from-green-500/10 to-card',
};

export const buttonToBorder: { [key: string]: string } = {
  'nad-reboot-100': 'border-blue-500',
  'nad-restore-200': 'border-purple-500',
  'nad-revive-250': 'border-orange-500',
  'nad-regenerate-500': 'border-red-500',
  'nad-elite-750': 'border-green-500',
};

export const softBorder: { [key: string]: string } = {
    'nad-reboot-100': 'border-blue-200',
    'nad-restore-200': 'border-purple-200',
    'nad-revive-250': 'border-orange-200',
    'nad-regenerate-500': 'border-red-200',
    'nad-elite-750': 'border-green-200',
  };