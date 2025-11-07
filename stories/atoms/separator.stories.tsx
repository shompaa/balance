import { Separator } from "@/components/ui/separator";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "UI/Átomos/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientación del separador",
    },
    decorative: {
      control: "boolean",
      description: "Si es solo decorativo (no semántico)",
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

// Horizontal
export const Horizontal: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <h4 className="text-sm font-medium">Arriba</h4>
        <p className="text-sm text-muted-foreground">Contenido superior</p>
      </div>
      <Separator />
      <div>
        <h4 className="text-sm font-medium">Abajo</h4>
        <p className="text-sm text-muted-foreground">Contenido inferior</p>
      </div>
    </div>
  ),
};

// Vertical
export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center gap-4">
      <div className="text-sm">Izquierda</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Centro</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Derecha</div>
    </div>
  ),
};

// En una lista
export const InList: Story = {
  render: () => (
    <div className="w-80">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Mi Cuenta</h4>
        <p className="text-sm text-muted-foreground">
          Administra tu configuración de cuenta
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Perfil</h4>
        <p className="text-sm text-muted-foreground">
          Actualiza tu información personal
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Seguridad</h4>
        <p className="text-sm text-muted-foreground">
          Configura opciones de seguridad
        </p>
      </div>
    </div>
  ),
};

// En navegación
export const InNavigation: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <nav className="space-y-1">
        <a href="#" className="block px-3 py-2 rounded-md hover:bg-accent">
          Dashboard
        </a>
        <a href="#" className="block px-3 py-2 rounded-md hover:bg-accent">
          Proyectos
        </a>
        <Separator className="my-2" />
        <a href="#" className="block px-3 py-2 rounded-md hover:bg-accent">
          Configuración
        </a>
        <a href="#" className="block px-3 py-2 rounded-md hover:bg-accent">
          Ayuda
        </a>
        <Separator className="my-2" />
        <a href="#" className="block px-3 py-2 rounded-md hover:bg-accent text-destructive">
          Cerrar sesión
        </a>
      </nav>
    </div>
  ),
};

// En tarjeta
export const InCard: Story = {
  render: () => (
    <div className="w-80 rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <h3 className="text-2xl font-semibold">Título</h3>
        <p className="text-sm text-muted-foreground">Subtítulo o descripción</p>
      </div>
      <Separator />
      <div className="p-6">
        <p className="text-sm">Contenido principal de la tarjeta</p>
      </div>
      <Separator />
      <div className="p-6 flex justify-between">
        <button className="text-sm font-medium hover:underline">Cancelar</button>
        <button className="text-sm font-medium text-primary hover:underline">Aceptar</button>
      </div>
    </div>
  ),
};

// En header/footer
export const InHeader: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <header className="py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Logo</h1>
          <nav className="flex gap-4">
            <a href="#" className="text-sm hover:underline">Inicio</a>
            <a href="#" className="text-sm hover:underline">Acerca</a>
            <a href="#" className="text-sm hover:underline">Contacto</a>
          </nav>
        </div>
      </header>
      <Separator />
      <main className="py-6">
        <p className="text-sm">Contenido principal</p>
      </main>
    </div>
  ),
};

// En toolbar
export const InToolbar: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-2 border rounded-lg w-fit">
      <button className="p-2 hover:bg-accent rounded">B</button>
      <button className="p-2 hover:bg-accent rounded">I</button>
      <button className="p-2 hover:bg-accent rounded">U</button>
      <Separator orientation="vertical" className="h-6" />
      <button className="p-2 hover:bg-accent rounded">L</button>
      <button className="p-2 hover:bg-accent rounded">C</button>
      <button className="p-2 hover:bg-accent rounded">R</button>
      <Separator orientation="vertical" className="h-6" />
      <button className="p-2 hover:bg-accent rounded">🔗</button>
      <button className="p-2 hover:bg-accent rounded">🖼️</button>
    </div>
  ),
};

// Con diferentes grosores
export const Thickness: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <p className="text-sm mb-2">Por defecto (1px)</p>
        <Separator />
      </div>
      <div>
        <p className="text-sm mb-2">Grueso (2px)</p>
        <Separator className="h-[2px]" />
      </div>
      <div>
        <p className="text-sm mb-2">Muy grueso (4px)</p>
        <Separator className="h-[4px]" />
      </div>
    </div>
  ),
};

// Con diferentes colores
export const Colors: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <p className="text-sm mb-2">Por defecto</p>
        <Separator />
      </div>
      <div>
        <p className="text-sm mb-2">Primario</p>
        <Separator className="bg-primary" />
      </div>
      <div>
        <p className="text-sm mb-2">Destructivo</p>
        <Separator className="bg-destructive" />
      </div>
      <div>
        <p className="text-sm mb-2">Muted</p>
        <Separator className="bg-muted" />
      </div>
    </div>
  ),
};

// Con texto
export const WithText: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-2 text-xs text-muted-foreground">
            O continúa con
          </span>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-2 text-sm font-medium">
            Sección 2
          </span>
        </div>
      </div>
    </div>
  ),
};
