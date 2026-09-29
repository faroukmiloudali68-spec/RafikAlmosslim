import {
  Sparkles, Download, Menu, MapPin, Sunrise, CloudSun, BookOpen, CircleDot,
  Clock, Heart, CalendarHeart, Settings, BookMarked, Library, Info, Lightbulb,
  ScrollText, List, Map, Bookmark, Shuffle, Play, Copy, HelpCircle, Languages,
  Type, Search, Share2, VolumeX, EyeOff, Hand, Save, MessageCircle, Send,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles, Download, Menu, MapPin, Sunrise, CloudSun, BookOpen, CircleDot,
  Clock, Heart, CalendarHeart, Settings, BookMarked, Library, Info, Lightbulb,
  ScrollText, List, Map, Bookmark, Shuffle, Play, Copy, HelpCircle, Languages,
  Type, Search, Share2, VolumeX, EyeOff, Hand, Save, MessageCircle, Send,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 24, className = "" }: IconProps) {
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} />;
}
