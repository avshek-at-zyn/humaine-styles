import { useState, useCallback, createContext, useContext } from 'react'
import './App.css'
import { IntroPage } from './pages/IntroPage'
import { ColorsPage } from './pages/ColorsPage'
import { TypographyPage } from './pages/TypographyPage'
import { RadiusPage } from './pages/RadiusPage'
import { SpacingPage } from './pages/SpacingPage'
import { ShadowsPage } from './pages/ShadowsPage'
import { GradientsPage } from './pages/GradientsPage'
import { LogoPage } from './pages/LogoPage'
import { ButtonsPage } from './pages/ButtonsPage'
import { InputsPage } from './pages/InputsPage'
import { CardsPage } from './pages/CardsPage'
import { BadgesPage } from './pages/BadgesPage'
import { NavigationPage } from './pages/NavigationPage'
import { ChatInputPage } from './pages/ChatInputPage'
import { DataDisplayPage } from './pages/DataDisplayPage'
import { TabsPage } from './pages/TabsPage'
import { ChipsPage } from './pages/ChipsPage'
import { AvatarPage } from './pages/AvatarPage'
import { TogglePage } from './pages/TogglePage'
import { ModalPage } from './pages/ModalPage'
import { DividerPage } from './pages/DividerPage'
import { TooltipPage } from './pages/TooltipPage'
import { ListItemPage } from './pages/ListItemPage'
import { SocialButtonPage } from './pages/SocialButtonPage'

export const CopyContext = createContext<(t: string) => void>(() => {})
export const useCopy = () => useContext(CopyContext)

type PageId =
  | 'intro' | 'logo' | 'colors' | 'typography' | 'radius' | 'spacing' | 'shadows' | 'gradients'
  | 'buttons' | 'inputs' | 'cards' | 'badges' | 'navigation' | 'chat-input' | 'data-display'
  | 'tabs' | 'chips' | 'avatar' | 'toggle' | 'modal' | 'divider' | 'tooltip' | 'list-item' | 'social-button'

const NAV = [
  {
    section: 'Getting Started',
    items: [
      { id: 'intro' as PageId, label: 'Introduction', color: 'var(--gradient-brand)' },
      { id: 'logo' as PageId, label: 'Logo & Brand', color: '#E5C3F0' },
    ],
  },
  {
    section: 'Foundation',
    items: [
      { id: 'colors' as PageId, label: 'Colors', color: '#5271FF' },
      { id: 'typography' as PageId, label: 'Typography', color: '#B5B7F6' },
      { id: 'gradients' as PageId, label: 'Gradients', color: '#E5C3F0' },
      { id: 'radius' as PageId, label: 'Border Radius', color: '#ACE1E4' },
      { id: 'spacing' as PageId, label: 'Spacing', color: '#5271FF' },
      { id: 'shadows' as PageId, label: 'Shadows', color: '#B5B7F6' },
    ],
  },
  {
    section: 'Components',
    items: [
      { id: 'buttons' as PageId, label: 'Button', color: '#5271FF' },
      { id: 'inputs' as PageId, label: 'TextField', color: '#B5B7F6' },
      { id: 'tabs' as PageId, label: 'Tabs', color: '#E5C3F0' },
      { id: 'chips' as PageId, label: 'Chip', color: '#ACE1E4' },
      { id: 'badges' as PageId, label: 'Badge', color: '#5271FF' },
      { id: 'avatar' as PageId, label: 'Avatar', color: '#B5B7F6' },
      { id: 'toggle' as PageId, label: 'Toggle', color: '#E5C3F0' },
      { id: 'cards' as PageId, label: 'Card', color: '#ACE1E4' },
      { id: 'navigation' as PageId, label: 'Sidebar Menu', color: '#5271FF' },
      { id: 'list-item' as PageId, label: 'List Item', color: '#B5B7F6' },
      { id: 'chat-input' as PageId, label: 'ChatInput', color: '#E5C3F0' },
      { id: 'social-button' as PageId, label: 'Social Button', color: '#ACE1E4' },
      { id: 'modal' as PageId, label: 'Modal / Dialog', color: '#5271FF' },
      { id: 'tooltip' as PageId, label: 'Tooltip', color: '#B5B7F6' },
      { id: 'divider' as PageId, label: 'Divider', color: '#E5C3F0' },
      { id: 'data-display' as PageId, label: 'Table & KPI', color: '#ACE1E4' },
    ],
  },
]

const PAGES: Record<PageId, React.FC> = {
  intro: IntroPage,
  logo: LogoPage,
  colors: ColorsPage,
  typography: TypographyPage,
  radius: RadiusPage,
  spacing: SpacingPage,
  shadows: ShadowsPage,
  gradients: GradientsPage,
  buttons: ButtonsPage,
  inputs: InputsPage,
  tabs: TabsPage,
  chips: ChipsPage,
  badges: BadgesPage,
  avatar: AvatarPage,
  toggle: TogglePage,
  cards: CardsPage,
  navigation: NavigationPage,
  'list-item': ListItemPage,
  'chat-input': ChatInputPage,
  'social-button': SocialButtonPage,
  modal: ModalPage,
  tooltip: TooltipPage,
  divider: DividerPage,
  'data-display': DataDisplayPage,
}

function App() {
  const [activePage, setActivePage] = useState<PageId>('intro')
  const [toast, setToast] = useState<string | null>(null)

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text)
    setToast(`Copied: ${text}`)
    setTimeout(() => setToast(null), 1800)
  }, [])

  const PageComponent = PAGES[activePage]

  return (
    <CopyContext.Provider value={copyToClipboard}>
      <div className="app">
        <div className="galaxy-bg">
          <div className="stars" />
        </div>

        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <div className="logo-mark">H</div>
              <span className="logo-text">HumAIne Styles</span>
            </div>
            <div className="sidebar-version">v1.0.0</div>
          </div>
          <nav className="sidebar-nav">
            {NAV.map((group) => (
              <div key={group.section} className="nav-section">
                <div className="nav-section-title">{group.section}</div>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                    onClick={() => setActivePage(item.id)}
                  >
                    <span className="nav-dot" style={{ background: item.color }} />
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        <main className="main-content" key={activePage}>
          <div className="page-content">
            <PageComponent />
          </div>
        </main>

        {toast && <div className="copy-toast">{toast}</div>}
      </div>
    </CopyContext.Provider>
  )
}

export default App
