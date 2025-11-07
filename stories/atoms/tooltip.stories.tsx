import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Info, HelpCircle, Settings, Trash2, Copy, Download } from "lucide-react";

const meta = {
  title: "UI/Átomos/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Básico
export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Este es un tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

// Con icono
export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Información adicional</p>
      </TooltipContent>
    </Tooltip>
  ),
};

// Diferentes posiciones
export const Positions: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-16">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip arriba</p>
        </TooltipContent>
      </Tooltip>

      <div className="flex gap-16">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip izquierda</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip derecha</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip abajo</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Con diferentes contenidos
export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          Este es un tooltip con contenido más largo que puede abarcar
          múltiples líneas y proporciona información detallada.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

// En iconos de acción
export const ActionIcons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Configuración</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Copy className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copiar</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Download className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Descargar</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Trash2 className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Eliminar</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Con atajos de teclado
export const WithShortcut: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Guardar</Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            <span>Guardar</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
              <span className="text-xs">⌘</span>S
            </kbd>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Buscar</Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            <span>Buscar</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// En texto inline
export const InlineText: Story = {
  render: () => (
    <p className="text-sm">
      Este es un texto con un{" "}
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="underline decoration-dotted underline-offset-2">
            término técnico
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Definición del término técnico</p>
        </TooltipContent>
      </Tooltip>{" "}
      que necesita explicación.
    </p>
  ),
};

// Con icono de ayuda
export const HelpIcon: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">Configuración avanzada</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="text-muted-foreground hover:text-foreground">
            <HelpCircle className="size-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>
            Las opciones de configuración avanzada te permiten personalizar
            el comportamiento del sistema.
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// En formulario
export const InForm: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="username" className="text-sm font-medium">
            Nombre de usuario
          </label>
          <Tooltip>
            <TooltipTrigger asChild>
              <button type="button" className="text-muted-foreground">
                <Info className="size-3.5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Debe tener entre 3 y 20 caracteres</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <input
          id="username"
          className="w-full rounded-md border px-3 py-2 text-sm"
          placeholder="usuario123"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Tooltip>
            <TooltipTrigger asChild>
              <button type="button" className="text-muted-foreground">
                <Info className="size-3.5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Usaremos este email para notificaciones</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <input
          id="email"
          type="email"
          className="w-full rounded-md border px-3 py-2 text-sm"
          placeholder="email@ejemplo.com"
        />
      </div>
    </div>
  ),
};

// Deshabilitado
export const Disabled: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" disabled>
          Botón deshabilitado
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Este botón está deshabilitado</p>
      </TooltipContent>
    </Tooltip>
  ),
};

// Múltiples tooltips
export const MultipleTooltips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"].map((option, i) => (
        <Tooltip key={i}>
          <TooltipTrigger asChild>
            <Button variant="outline">{option}</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Descripción de {option}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};
