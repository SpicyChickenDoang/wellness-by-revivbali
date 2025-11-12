import type { LucideProps } from "lucide-react";
import { Zap, Sparkles, BatteryCharging, Plane, Dna, ScanFace } from "lucide-react";

export const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  'nad-reboot-100': Sparkles,
  'nad-restore-200': BatteryCharging,
  'nad-revive-250': Plane,
  'nad-regenerate-500': Dna,
  'nad-elite-750': Zap,
  'prp': ScanFace,
};

export const slugToColor: { [key: string]: string } = {
  'nad-reboot-100': 'text-gold',
  'nad-restore-200': 'text-gold',
  'nad-revive-250': 'text-gold',
  'nad-regenerate-500': 'text-gold',
  'nad-elite-750': 'text-gold',
  'prp': 'text-gold',
};

export const slugToGradient: { [key: string]: string } = {
  'nad-reboot-100': 'from-gold to-card',
  'nad-restore-200': 'from-gold to-card',
  'nad-revive-250': 'from-gold to-card',
  'nad-regenerate-500': 'from-gold to-card',
  'nad-elite-750': 'from-gold to-card',
  'prp': 'from-gold to-card',
};

export const buttonToBorder: { [key: string]: string } = {
  'nad-reboot-100': 'border-blue-500',
  'nad-restore-200': 'border-purple-500',
  'nad-revive-250': 'border-orange-500',
  'nad-regenerate-500': 'border-red-500',
  'nad-elite-750': 'border-green-500',
  'prp': 'border-green-500',
};

export const softBorder: { [key: string]: string } = {
    'nad-reboot-100': 'border-blue-200',
    'nad-restore-200': 'border-purple-200',
    'nad-revive-250': 'border-orange-200',
    'nad-regenerate-500': 'border-red-200',
    'nad-elite-750': 'border-green-200',
    'prp': 'border-green-200',
  };