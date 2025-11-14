import type { LucideProps } from "lucide-react";
import { Zap, Sparkles, BatteryCharging, Plane, Dna, ScanFace } from "lucide-react";

export const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  'nad-reboot-100': Sparkles,
  'nad-restore-200': BatteryCharging,
  'nad-revive-250': Plane,
  'nad-regenerate-500': Dna,
  'nad-elite-750': Zap,
  'prp': ScanFace,
  'nad-full': ScanFace,
  'secretom-1': ScanFace,
  'secretom-2': ScanFace,
};

export const slugToColor: { [key: string]: string } = {
  'nad-reboot-100': 'text-gold',
  'nad-restore-200': 'text-gold',
  'nad-revive-250': 'text-gold',
  'nad-regenerate-500': 'text-gold',
  'nad-elite-750': 'text-gold',
  'prp': 'text-gold',
  'nad-full': 'text-gold',
  'secretom-1': 'text-gold',
  'secretom-2': 'text-gold',
};

export const slugToGradient: { [key: string]: string } = {
  'nad-reboot-100': 'from-gold to-card',
  'nad-restore-200': 'from-gold to-card',
  'nad-revive-250': 'from-gold to-card',
  'nad-regenerate-500': 'from-gold to-card',
  'nad-elite-750': 'from-gold to-card',
  'prp': 'from-gold to-card',
  'nad-full': 'from-gold to-card',
  'secretom-1': 'from-gold to-card',
  'secretom-2': 'from-gold to-card',
};

export const buttonToBorder: { [key: string]: string } = {
  'nad-reboot-100': 'border-yellow-200',
  'nad-restore-200': 'border-yellow-200',
  'nad-revive-250': 'border-yellow-200',
  'nad-regenerate-500': 'border-yellow-200',
  'nad-elite-750': 'border-yellow-200',
  'prp': 'border-yellow-200',
  'nad-full': 'border-yellow-200',
  'secretom-1': 'border-yellow-200',
  'secretom-2': 'border-yellow-200',
};

export const softBorder: { [key: string]: string } = {
    'nad-reboot-100': 'border-yellow-200',
    'nad-restore-200': 'border-yellow-200',
    'nad-revive-250': 'border-yellow-200',
    'nad-regenerate-500': 'border-yellow-200',
    'nad-elite-750': 'border-yellow-200',
    'prp': 'border-yellow-200',
    'nad-full': 'border-yellow-200',
    'secretom-1': 'border-yellow-200',
    'secretom-2': 'border-yellow-200',
  };