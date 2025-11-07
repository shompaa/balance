import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Info } from "lucide-react";

const meta = {
  title: "UI/Átomos/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// Básico
export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="email@example.com" />
    </div>
  ),
};

// Con input requerido
export const Required: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="name">
        Nombre <span className="text-destructive">*</span>
      </Label>
      <Input id="name" placeholder="Juan Pérez" required />
    </div>
  ),
};

// Con descripción
export const WithDescription: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="username">Nombre de usuario</Label>
      <Input id="username" placeholder="usuario123" />
      <p className="text-sm text-muted-foreground">
        Este será tu nombre público visible para otros usuarios.
      </p>
    </div>
  ),
};

// Con icono
export const WithIcon: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="password" className="flex items-center gap-2">
        Contraseña
        <Info className="size-3.5 text-muted-foreground" />
      </Label>
      <Input id="password" type="password" placeholder="••••••••" />
    </div>
  ),
};

// Formulario completo
export const FormExample: Story = {
  render: () => (
    <form className="w-80 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">Nombre</Label>
        <Input id="firstName" placeholder="Juan" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lastName">Apellido</Label>
        <Input id="lastName" placeholder="Pérez" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email-form">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input id="email-form" type="email" placeholder="juan@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input id="phone" type="tel" placeholder="+54 11 1234-5678" />
      </div>
    </form>
  ),
};

// Con error
export const WithError: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email-error" className="text-destructive">
        Email
      </Label>
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

// Con diferentes tipos de input
export const WithDifferentInputs: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="text-input">Texto</Label>
        <Input id="text-input" type="text" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="number-input">Número</Label>
        <Input id="number-input" type="number" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="date-input">Fecha</Label>
        <Input id="date-input" type="date" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="file-input">Archivo</Label>
        <Input id="file-input" type="file" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="textarea">Mensaje</Label>
        <textarea
          id="textarea"
          className="w-full min-h-24 rounded-md border px-3 py-2 text-sm"
          placeholder="Escribe tu mensaje..."
        />
      </div>
    </div>
  ),
};

// Con checkbox
export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="terms"
        className="size-4 rounded border"
      />
      <Label htmlFor="terms" className="cursor-pointer">
        Acepto los términos y condiciones
      </Label>
    </div>
  ),
};

// Con radio buttons
export const WithRadio: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="text-sm font-medium">Selecciona una opción:</div>
      
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="option1"
          name="options"
          className="size-4 rounded-full border"
        />
        <Label htmlFor="option1" className="cursor-pointer">
          Opción 1
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="option2"
          name="options"
          className="size-4 rounded-full border"
        />
        <Label htmlFor="option2" className="cursor-pointer">
          Opción 2
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="option3"
          name="options"
          className="size-4 rounded-full border"
        />
        <Label htmlFor="option3" className="cursor-pointer">
          Opción 3
        </Label>
      </div>
    </div>
  ),
};

// Deshabilitado
export const Disabled: Story = {
  render: () => (
    <div className="space-y-2 group" data-disabled="true">
      <Label htmlFor="disabled-input">Campo deshabilitado</Label>
      <Input id="disabled-input" disabled placeholder="No se puede editar" />
    </div>
  ),
};

// Con ayuda opcional
export const WithOptionalTag: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="bio">
        Biografía <span className="text-muted-foreground font-normal">(Opcional)</span>
      </Label>
      <textarea
        id="bio"
        className="w-80 min-h-24 rounded-md border px-3 py-2 text-sm"
        placeholder="Cuéntanos sobre ti..."
      />
    </div>
  ),
};

// Tamaños personalizados
export const CustomSizes: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="small" className="text-xs">
          Label pequeño
        </Label>
        <Input id="small" className="h-8 text-xs" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="default">Label por defecto</Label>
        <Input id="default" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="large" className="text-base">
          Label grande
        </Label>
        <Input id="large" className="h-11 text-base" />
      </div>
    </div>
  ),
};

// Grid de formulario
export const GridLayout: Story = {
  render: () => (
    <div className="w-[600px] grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="first-name-grid">Nombre</Label>
        <Input id="first-name-grid" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="last-name-grid">Apellido</Label>
        <Input id="last-name-grid" />
      </div>

      <div className="space-y-2 col-span-2">
        <Label htmlFor="email-grid">Email</Label>
        <Input id="email-grid" type="email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">Ciudad</Label>
        <Input id="city" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">País</Label>
        <Input id="country" />
      </div>
    </div>
  ),
};
