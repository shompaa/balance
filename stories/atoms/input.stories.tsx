import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Mail, Search as SearchIcon, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const meta = {
  title: "UI/Átomos/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "Tipo de input HTML",
    },
    placeholder: {
      control: "text",
      description: "Texto de placeholder",
    },
    disabled: {
      control: "boolean",
      description: "Estado deshabilitado",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variantes básicas
export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Escribe algo...",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "email@example.com",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "••••••••",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "0",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Buscar...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Deshabilitado",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "Valor predefinido",
  },
};

// Con label
export const WithLabel: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label htmlFor="email-input">Email</Label>
      <Input id="email-input" type="email" placeholder="email@example.com" />
    </div>
  ),
};

// Con iconos (usando decoradores CSS)
export const WithIcon: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <Input className="pl-10" type="email" placeholder="Email" />
      </div>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <Input className="pl-10" type="search" placeholder="Buscar..." />
      </div>
    </div>
  ),
};

// Password con toggle
export const PasswordToggle: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
      <div className="w-80">
        <Label htmlFor="password">Contraseña</Label>
        <div className="relative mt-2">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
      </div>
    );
  },
};

// Formulario completo
export const FormExample: Story = {
  render: () => (
    <form className="w-80 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" placeholder="Juan Pérez" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email-form">Email</Label>
        <Input id="email-form" type="email" placeholder="juan@example.com" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input id="phone" type="tel" placeholder="+54 11 1234-5678" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <Input id="message" placeholder="Escribe tu mensaje..." />
      </div>
    </form>
  ),
};

// Estados de error
export const WithError: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label htmlFor="email-error">Email</Label>
      <Input
        id="email-error"
        type="email"
        placeholder="email@example.com"
        aria-invalid="true"
      />
      <p className="text-sm text-destructive">El email es requerido</p>
    </div>
  ),
};

// File input
export const FileInput: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label htmlFor="file">Subir archivo</Label>
      <Input id="file" type="file" />
    </div>
  ),
};

// Diferentes tamaños
export const Sizes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <Label>Tamaño por defecto</Label>
        <Input placeholder="h-9" />
      </div>
      <div className="space-y-2">
        <Label>Personalizado pequeño</Label>
        <Input className="h-8 text-xs" placeholder="h-8 text-xs" />
      </div>
      <div className="space-y-2">
        <Label>Personalizado grande</Label>
        <Input className="h-11 text-base" placeholder="h-11 text-base" />
      </div>
    </div>
  ),
};
