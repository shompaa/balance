/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@/components/ds/typography";
import { TypographyProps } from "@/types/ds";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { JSX } from "react";

const meta = {
  title: "DS/Átomos/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "blockquote",
        "table",
        "list",
        "inlineCode",
        "lead",
        "large",
        "small",
        "muted",
      ],
    },
    as: {
      control: "text",
      description:
        'Elemento HTML subyacente. Ej: "h1", "p", "ul", "code", "table"...',
    },
    className: { control: "text" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

/* --- Variantes individuales --- */

export const Paragraph: Story = {
  name: "p",
  args: {
    variant: "p",
    as: "p",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const H1: Story = {
  args: {
    variant: "h1",
    as: "h1",
    children: "H1 — Título principal de página",
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    as: "h2",
    children: "H2 — Encabezado de sección",
  },
};

export const H3: Story = {
  args: {
    variant: "h3",
    as: "h3",
    children: "H3 — Subsección",
  },
};

export const H4: Story = {
  args: {
    variant: "h4",
    as: "h4",
    children: "H4 — Encabezado menor",
  },
};

export const Blockquote: Story = {
  args: {
    variant: "blockquote",
    as: "blockquote",
    children: "“Si tú lo deseas, puedes volar”",
  },
};

export const List: Story = {
  args: {
    variant: "list",
    as: "ul",
    children: (
      <>
        <li>Diseño Atómico</li>
        <li>Consistencia</li>
        <li>Accesibilidad</li>
      </>
    ) as unknown as string,
  },
  render: (args: JSX.IntrinsicAttributes & TypographyProps) => (
    <Typography {...args} as="ul" variant="list">
      <li>Diseño Atómico</li>
      <li>Consistencia</li>
      <li>Accesibilidad</li>
    </Typography>
  ),
};

export const Table: Story = {
  args: {
    variant: "table",
    as: "table",
    children: (
      <>
        <thead>
          <tr>
            <th>Token</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--radius</td>
            <td>0.5rem</td>
          </tr>
          <tr>
            <td>--ring</td>
            <td>hsl(var(--ring))</td>
          </tr>
        </tbody>
      </>
    ) as unknown as string,
  },
  render: (args) => (
    <Typography {...args} as="table" variant="table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>--radius</td>
          <td>0.5rem</td>
        </tr>
        <tr>
          <td>--ring</td>
          <td>hsl(var(--ring))</td>
        </tr>
      </tbody>
    </Typography>
  ),
};

export const InlineCode: Story = {
  args: {
    variant: "inlineCode",
    as: "code",
    children: "npm install class-variance-authority",
  },
};

export const Lead: Story = {
  args: {
    variant: "lead",
    as: "p",
    children:
      "La bebesita bebelin.",
  },
};

export const Large: Story = {
  args: {
    variant: "large",
    as: "p",
    children: "Perreo pa los nenes.",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    as: "small",
    children: "Perreo pa las nenas.",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    as: "p",
    children: "Cuando sienta el boom.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="max-w-2xl space-y-6">
      <Typography variant="h1" as="h1">
        H1 — Título principal de página
      </Typography>

      <Typography variant="h2" as="h2">
        H2 — Encabezado de sección
      </Typography>

      <Typography variant="h3" as="h3">
        H3 — Subsección
      </Typography>

      <Typography variant="h4" as="h4">
        H4 — Encabezado menor
      </Typography>

      <Typography variant="p" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      <Typography variant="blockquote" as="blockquote">
        “Si tú lo deseas, puedes volar”
      </Typography>

      <Typography variant="list" as="ul">
        <li>Diseño Atómico</li>
        <li>Consistencia</li>
        <li>Accesibilidad</li>
      </Typography>

      <Typography variant="inlineCode" as="code">
        const saludo = "mundo"
      </Typography>

      <Typography variant="lead" as="p">
        Este es un texto destacado que resalta dentro de una sección.
      </Typography>

      <Typography variant="large" as="p">
        Texto grande con énfasis.
      </Typography>

      <Typography variant="small" as="small">
        Texto auxiliar pequeño.
      </Typography>

      <Typography variant="muted" as="p">
        Texto secundario atenuado.
      </Typography>

      <Typography variant="table" as="table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--radius</td>
            <td>0.5rem</td>
          </tr>
          <tr>
            <td>--ring</td>
            <td>hsl(var(--ring))</td>
          </tr>
        </tbody>
      </Typography>
    </div>
  ),
};
