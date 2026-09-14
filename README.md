# Dev Stack

A modern, interactive web application to discover, explore, and build your personalized development technology stack. Perfect for developers of all levels who want to master the tools that power modern software development.

## Description

Dev Stack is a beautifully designed React application that allows users to:
- Browse a curated collection of technologies across different categories
- View detailed information (rating, difficulty, badges)
- Add technologies to a personalized stack
- Manage selections with an intuitive sidebar interface
- Receive real-time toast notifications for actions

Whether you're a beginner exploring technologies or an advanced developer refining your toolkit, Dev Stack helps you build your ideal tech ecosystem.

## Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Notifications**: React-Toastify
- **Icons**: Lucide React
- **Version Control**: Git & GitHub

## Key Features

1. **Responsive Design** - Mobile-first approach, fully responsive across all devices
2. **Beautiful Technology Cards** - Interactive cards with badges, ratings, and difficulty levels
3. **Smart Stack Management** - Add/remove technologies with duplicate prevention
4. **Real-time Notifications** - Toast alerts for all user actions
5. **Loading States** - Smooth spinner while loading data
6. **Gradient Branding** - Consistent orange-to-purple gradient throughout

## Design Preview

[Figma Link: Your Design](https://www.figma.com/design/hRyXxbUvRW7bLDLqTRTLCb/DevStack)

## Getting Started

### Prerequisites
- Node.js v16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Mushfiq-Srijon/a-05.git
cd a-05
cd dev-stack

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` in your browser.

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   ├── Hero.tsx                # Hero section
│   ├── TechnologyCard.tsx      # Tech card component
│   ├── TechnologiesGrid.tsx    # Grid layout
│   ├── YourStack.tsx           # Sidebar manager
│   └── Footer.tsx              # Footer
├── data/
│   └── technologies.json       # Technology data
├── types/
│   └── index.ts                # TypeScript types
├── App.tsx                     # Main app
└── index.css                   # Global styles
```

## Color Scheme

- **Accent**: `#FF006E` (Pink/Magenta)
- **Orange CTA**: `#FF6B35`
- **Dark Buttons**: `#1a1a1a`
- **Gradient**: Orange → Pink → Purple

## 🔧 How It Works

### Adding Technologies
Click "Add to Stack" on any card. The button becomes disabled with a checkmark once added. Duplicate attempts show a warning toast.

### Your Stack Sidebar
Shows all selected technologies with a count. Click ✕ to remove individual items or "Remove All" to clear everything.

### Responsive Behavior
- **Mobile**: 1-column grid with compact sidebar
- **Tablet**: 2-column grid
- **Desktop**: 3-column grid with sticky sidebar

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Connect to Vercel and auto-deploy
```

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension that lets you write HTML-like code in JavaScript. It makes components more readable by letting you describe UI structure directly. Under the hood, JSX compiles to JavaScript function calls (`React.createElement()`). We use it because it's intuitive and mirrors the actual UI layout you're building.

### 2. What is the difference between props and state?

**Props** are read-only values passed from parent to child (like function parameters). They flow one direction.

**State** is internal data managed within a component that can change and trigger re-renders. In this project, `selectedStack` is state in App, while `tech` passed to TechnologyCard is a prop.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` adds state to functional components, returning `[value, setValue]`. In this project:
- `selectedStack` - tracks added technologies
- `technologies` & `loading` - manages data fetching
- `isOpen` - could be used for mobile menu toggle

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects (fetching, subscriptions, timers) after render. Without it, fetching would run on every render, causing infinite loops. The empty `[]` dependency ensures it runs only once on mount.

### 5. Why does every item in a .map() list need a unique key prop?

Keys help React identify which items changed. Without unique keys, React may reuse DOM elements incorrectly, causing bugs and performance issues. We use `key={tech.id}` because each technology has a unique ID.

### 6. What is conditional rendering? Show one place you used it in this project.

Conditional rendering shows/hides components based on conditions. In YourStack:

```typescript
{stack.length === 0 ? (
  <div>Your stack is empty</div>
) : (
  <div>Display stack items</div>
)}
```

### 7. How do you pass data from a parent to child, and how does a child send data back?

**Parent to Child**: Pass as props
```typescript
<TechnologiesGrid selectedStack={selectedStack} />
```

**Child to Parent**: Pass callback functions as props
```typescript
<TechnologyCard onAdd={() => onAdd(tech)} />
```

The child calls `onAdd(tech)`, sending data back to the parent.
