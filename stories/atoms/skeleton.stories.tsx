import { Skeleton } from "@/components/ui/skeleton";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "UI/Átomos/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Básico
export const Default: Story = {
  render: () => <Skeleton className="h-4 w-[200px]" />,
};

// Formas comunes
export const Circle: Story = {
  render: () => <Skeleton className="size-12 rounded-full" />,
};

export const Rectangle: Story = {
  render: () => <Skeleton className="h-24 w-48" />,
};

export const Line: Story = {
  render: () => <Skeleton className="h-4 w-full" />,
};

// Tarjeta de carga
export const Card: Story = {
  render: () => (
    <div className="w-80 space-y-4 p-4 border rounded-lg">
      <Skeleton className="h-48 w-full rounded-md" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  ),
};

// Perfil de usuario
export const UserProfile: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  ),
};

// Lista de artículos
export const ArticleList: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-4">
          <Skeleton className="size-16 rounded-md shrink-0" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  ),
};

// Tabla
export const Table: Story = {
  render: () => (
    <div className="w-[600px] space-y-2">
      <Skeleton className="h-10 w-full" />
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-4">
          <Skeleton className="h-8 w-12" />
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-8 w-24" />
        </div>
      ))}
    </div>
  ),
};

// Formulario
export const Form: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-24 w-full" />
      </div>
      <Skeleton className="h-10 w-32" />
    </div>
  ),
};

// Galería
export const Gallery: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 w-[600px]">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Skeleton key={i} className="aspect-square rounded-md" />
      ))}
    </div>
  ),
};

// Post de blog
export const BlogPost: Story = {
  render: () => (
    <div className="w-[700px] space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <div className="flex gap-2">
        <Skeleton className="size-10 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="h-64 w-full rounded-md" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  ),
};

// Comentarios
export const Comments: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="size-8 rounded-full" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-16 w-full rounded-md ml-10" />
        </div>
      ))}
    </div>
  ),
};

// Dashboard
export const Dashboard: Story = {
  render: () => (
    <div className="w-[800px] space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-2 p-4 border rounded-lg">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-full" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-64 rounded-lg" />
        <Skeleton className="h-64 rounded-lg" />
      </div>
    </div>
  ),
};
