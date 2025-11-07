import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Mail, Download, Loader2, ChevronRight } from "lucide-react";

const meta = {
  title: "UI/Átomos/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "Variante visual del botón",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
      description: "Tamaño del botón",
    },
    disabled: {
      control: "boolean",
      description: "Estado deshabilitado del botón",
    },
    asChild: {
      control: "boolean",
      description: "Renderiza el componente hijo en lugar del botón",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variantes básicas
export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

// Tamaños
export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

// Con iconos
export const WithIconLeft: Story = {
  args: {
    children: (
      <>
        <Mail />
        Login with Email
      </>
    ),
  },
};

export const WithIconRight: Story = {
  args: {
    children: (
      <>
        Continue
        <ChevronRight />
      </>
    ),
  },
};

export const IconButton: Story = {
  args: {
    size: "icon",
    children: <Download />,
  },
};

export const IconButtonSmall: Story = {
  args: {
    size: "icon-sm",
    children: <Download />,
  },
};

export const IconButtonLarge: Story = {
  args: {
    size: "icon-lg",
    children: <Download />,
  },
};

// Estados
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="animate-spin" />
        Please wait
      </>
    ),
  },
};

// Todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
};

// Todos los tamaños
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon-sm">
          <Download />
        </Button>
        <Button size="icon">
          <Download />
        </Button>
        <Button size="icon-lg">
          <Download />
        </Button>
      </div>
    </div>
  ),
};
