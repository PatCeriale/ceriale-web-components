import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '../icons/navigation-icons.js';
import '../icons/chevron-icons.js';
import '../icons/action-icons.js';
import '../icons/status-icons.js';
import '../icons/visibility-icons.js';
import '../icons/rating-icons.js';
import '../icons/professional-icons.js';
import '../icons/content-icons.js';
import '../icons/theme-icons.js';
import '../modal/modal.js';
import '../modal/icon-detail-viewer.js';

const meta: Meta = {
  title: 'Components/Icons',
  parameters: {
    docs: {
      description: {
        component: `
## Icon System

A comprehensive icon system built with Material Design principles. All icons support:
- **Sizing**: small (16px), medium (20px), large (24px), xl (32px)
- **Variants**: default, primary, secondary, success, warning, error, muted  
- **Interactions**: clickable state with hover effects
- **Accessibility**: ARIA labels and semantic markup
- **Theming**: CSS custom properties for easy customization

### Usage

\`\`\`html
<icon-menu size="large" variant="primary" clickable></icon-menu>
<icon-search size="medium" variant="secondary"></icon-search>
\`\`\`

### Icon Categories

1. **Navigation**: menu, close, arrows
2. **Chevrons**: directional indicators, home, search
3. **Actions**: plus, minus, edit, copy, share, etc.
4. **Status**: check, error, warning, info, loading
5. **Visibility**: eye, heart, thumbs up/down
6. **Rating**: stars, grades
7. **Professional**: GitHub, LinkedIn, email, portfolio
8. **Content**: image, video, code, documents
9. **Theme**: light/dark mode, palette, customization
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xl'],
      description: 'Icon size',
    },
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'muted',
      ],
      description: 'Icon color variant',
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Whether the icon is clickable',
    },
  },
};

export default meta;
type Story = StoryObj;

// All Icons Showcase
export const AllIcons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Complete showcase of all available icons organized by category. Click any icon to view details, variants, and copy code.',
      },
    },
  },
  render: () => {
    // Define icon data interface
    interface IconData {
      name: string;
      tagName: string;
      category: string;
    }

    // Define all available icons with their metadata
    const iconCategories: Record<string, IconData[]> = {
      Navigation: [
        { name: 'Menu', tagName: 'icon-menu', category: 'Navigation' },
        { name: 'Close', tagName: 'icon-close', category: 'Navigation' },
        {
          name: 'Arrow Left',
          tagName: 'icon-arrow-left',
          category: 'Navigation',
        },
        {
          name: 'Arrow Right',
          tagName: 'icon-arrow-right',
          category: 'Navigation',
        },
        { name: 'Arrow Up', tagName: 'icon-arrow-up', category: 'Navigation' },
        {
          name: 'Arrow Down',
          tagName: 'icon-arrow-down',
          category: 'Navigation',
        },
      ],
      'Chevrons & Navigation': [
        {
          name: 'Chevron Left',
          tagName: 'icon-chevron-left',
          category: 'Chevrons',
        },
        {
          name: 'Chevron Right',
          tagName: 'icon-chevron-right',
          category: 'Chevrons',
        },
        {
          name: 'Chevron Up',
          tagName: 'icon-chevron-up',
          category: 'Chevrons',
        },
        {
          name: 'Chevron Down',
          tagName: 'icon-chevron-down',
          category: 'Chevrons',
        },
        {
          name: 'Double Chevron Left',
          tagName: 'icon-double-chevron-left',
          category: 'Chevrons',
        },
        {
          name: 'Double Chevron Right',
          tagName: 'icon-double-chevron-right',
          category: 'Chevrons',
        },
        { name: 'Home', tagName: 'icon-home', category: 'Chevrons' },
        { name: 'Search', tagName: 'icon-search', category: 'Chevrons' },
      ],
      Actions: [
        { name: 'Plus', tagName: 'icon-plus', category: 'Actions' },
        { name: 'Minus', tagName: 'icon-minus', category: 'Actions' },
        { name: 'Edit', tagName: 'icon-edit', category: 'Actions' },
        { name: 'Copy', tagName: 'icon-copy', category: 'Actions' },
        { name: 'Share', tagName: 'icon-share', category: 'Actions' },
        { name: 'Download', tagName: 'icon-download', category: 'Actions' },
        { name: 'Print', tagName: 'icon-print', category: 'Actions' },
        { name: 'Attachment', tagName: 'icon-attachment', category: 'Actions' },
        {
          name: 'Shopping Cart',
          tagName: 'icon-shopping-cart',
          category: 'Actions',
        },
        { name: 'Filter', tagName: 'icon-filter', category: 'Actions' },
      ],
      Status: [
        { name: 'Check', tagName: 'icon-check', category: 'Status' },
        { name: 'Error', tagName: 'icon-error', category: 'Status' },
        { name: 'Warning', tagName: 'icon-warning', category: 'Status' },
        { name: 'Info', tagName: 'icon-info', category: 'Status' },
        { name: 'Loading', tagName: 'icon-loading', category: 'Status' },
      ],
      'Visibility & State': [
        { name: 'Eye', tagName: 'icon-eye', category: 'Visibility' },
        { name: 'Eye Off', tagName: 'icon-eye-off', category: 'Visibility' },
        { name: 'Heart', tagName: 'icon-heart', category: 'Visibility' },
        {
          name: 'Heart Outline',
          tagName: 'icon-heart-outline',
          category: 'Visibility',
        },
        { name: 'Thumb Up', tagName: 'icon-thumb-up', category: 'Visibility' },
        {
          name: 'Thumb Down',
          tagName: 'icon-thumb-down',
          category: 'Visibility',
        },
      ],
      'Rating & Feedback': [
        { name: 'Star', tagName: 'icon-star', category: 'Rating' },
        {
          name: 'Star Outline',
          tagName: 'icon-star-outline',
          category: 'Rating',
        },
        { name: 'Star Half', tagName: 'icon-star-half', category: 'Rating' },
      ],
      'Professional & Social': [
        { name: 'GitHub', tagName: 'icon-github', category: 'Professional' },
        {
          name: 'LinkedIn',
          tagName: 'icon-linkedin',
          category: 'Professional',
        },
        { name: 'Twitter', tagName: 'icon-twitter', category: 'Professional' },
        { name: 'Email', tagName: 'icon-email', category: 'Professional' },
        {
          name: 'Portfolio',
          tagName: 'icon-portfolio',
          category: 'Professional',
        },
        { name: 'Work', tagName: 'icon-work', category: 'Professional' },
        { name: 'School', tagName: 'icon-school', category: 'Professional' },
      ],
      'Content & Media': [
        { name: 'Image', tagName: 'icon-image', category: 'Content' },
        { name: 'Video', tagName: 'icon-video', category: 'Content' },
        {
          name: 'Play Circle',
          tagName: 'icon-play-circle',
          category: 'Content',
        },
        { name: 'Audio', tagName: 'icon-audio', category: 'Content' },
        { name: 'Code', tagName: 'icon-code', category: 'Content' },
        { name: 'Document', tagName: 'icon-document', category: 'Content' },
        { name: 'Folder', tagName: 'icon-folder', category: 'Content' },
        { name: 'PDF', tagName: 'icon-pdf', category: 'Content' },
      ],
      'Theme & Customization': [
        { name: 'Light Mode', tagName: 'icon-light-mode', category: 'Theme' },
        { name: 'Dark Mode', tagName: 'icon-dark-mode', category: 'Theme' },
        { name: 'Palette', tagName: 'icon-palette', category: 'Theme' },
        { name: 'Brush', tagName: 'icon-brush', category: 'Theme' },
        { name: 'Contrast', tagName: 'icon-contrast', category: 'Theme' },
        { name: 'Opacity', tagName: 'icon-opacity', category: 'Theme' },
        {
          name: 'Format Color Fill',
          tagName: 'icon-format-color-fill',
          category: 'Theme',
        },
      ],
    };

    const openModal = (iconData: IconData) => {
      const modal = document.querySelector('custom-modal');
      const viewer = document.querySelector('icon-detail-viewer');
      if (modal && viewer) {
        viewer.iconData = iconData;
        modal.openModal();
      }
    };

    // Helper function to create icon HTML string
    const createIconHTML = (
      tagName: string,
      size: string = 'large',
      variant: string = 'default',
    ) => {
      return `<${tagName} size="${size}" variant="${variant}"></${tagName}>`;
    };

    // Helper function to get variant based on category and icon name
    const getVariantForIcon = (
      categoryName: string,
      iconName: string,
    ): string => {
      if (categoryName === 'Status') {
        if (iconName === 'Check') return 'success';
        if (iconName === 'Error') return 'error';
        if (iconName === 'Warning') return 'warning';
        if (iconName === 'Info') return 'primary';
        return 'default';
      } else if (categoryName === 'Visibility & State') {
        if (iconName === 'Heart') return 'error';
        if (iconName === 'Thumb Up') return 'success';
        if (iconName === 'Thumb Down') return 'error';
        return 'default';
      } else if (
        categoryName === 'Rating & Feedback' &&
        iconName.includes('Star')
      ) {
        return 'warning';
      } else if (categoryName === 'Professional & Social') {
        if (iconName === 'LinkedIn' || iconName === 'Twitter') return 'primary';
        if (iconName === 'Portfolio' || iconName === 'School')
          return 'secondary';
        return 'default';
      } else if (categoryName === 'Content & Media') {
        if (iconName === 'Play Circle') return 'primary';
        if (iconName === 'Code' || iconName === 'Folder') return 'secondary';
        if (iconName === 'PDF') return 'error';
        return 'default';
      } else if (categoryName === 'Theme & Customization') {
        if (iconName === 'Light Mode') return 'warning';
        if (iconName === 'Dark Mode' || iconName === 'Brush')
          return 'secondary';
        if (iconName === 'Palette' || iconName === 'Format Color Fill')
          return 'primary';
        return 'default';
      }
      return 'default';
    };

    return html`
      <style>
        .icon-showcase {
          font-family: var(--sys-typescale-body-medium-font-family);
          color: var(--sys-color-on-surface);
        }

        .icon-category {
          margin-bottom: 2rem;
        }

        .icon-category h3 {
          margin-bottom: 1rem;
          font-size: var(--sys-typescale-headline-small-font-size);
          font-weight: var(--sys-typescale-headline-small-font-weight);
          color: var(--sys-color-primary);
          border-bottom: 1px solid var(--sys-color-outline-variant);
          padding-bottom: 0.5rem;
        }

        .icon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1rem;
        }

        .icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          border: 1px solid var(--sys-color-outline-variant);
          border-radius: var(--sys-shape-corner-small);
          background: var(--sys-color-surface);
          transition: all 0.2s ease;
          text-align: center;
          cursor: pointer;
        }

        .icon-item:hover {
          background: var(--sys-color-surface-variant);
          border-color: var(--sys-color-primary);
          transform: translateY(-2px);
          box-shadow: var(--sys-elevation-level2);
        }

        .icon-item span {
          margin-top: 0.5rem;
          font-size: var(--sys-typescale-body-small-font-size);
          color: var(--sys-color-on-surface-variant);
          word-break: break-word;
        }
      </style>

      <div class="icon-showcase">
        ${Object.entries(iconCategories).map(
          ([categoryName, icons]) => html`
            <div class="icon-category">
              <h3>${categoryName}</h3>
              <div class="icon-grid">
                ${icons.map(
                  (iconData) => html`
                    <div class="icon-item" @click=${() => openModal(iconData)}>
                      ${unsafeHTML(
                        createIconHTML(
                          iconData.tagName,
                          'large',
                          getVariantForIcon(categoryName, iconData.name),
                        ),
                      )}
                      <span
                        >${iconData.name
                          .toLowerCase()
                          .replace(/\s+/g, '-')}</span
                      >
                    </div>
                  `,
                )}
              </div>
            </div>
          `,
        )}
      </div>

      <custom-modal title="Icon Details">
        <icon-detail-viewer></icon-detail-viewer>
      </custom-modal>
    `;
  },
};
