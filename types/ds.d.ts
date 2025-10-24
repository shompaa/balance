
export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  className?: string;
  variant?: TypographyVariant;
}

export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "table" | "list" | "inlineCode" | "lead" | "large" | "small" | "muted";