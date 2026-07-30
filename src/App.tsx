import { useState, useCallback, createContext, useContext } from 'react'
import './App.css'
import { HomePage } from './pages/HomePage'
import { PhilosophyPage } from './pages/PhilosophyPage'
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
  | 'home' | 'philosophy' | 'logo' | 'colors' | 'typography' | 'radius' | 'spacing' | 'shadows' | 'gradients'
  | 'buttons' | 'inputs' | 'cards' | 'badges' | 'navigation' | 'chat-input' | 'data-display'
  | 'tabs' | 'chips' | 'avatar' | 'toggle' | 'modal' | 'divider' | 'tooltip' | 'list-item' | 'social-button'

const NAV = [
  {
    section: '',
    items: [
      { id: 'home' as PageId, label: 'Home', icon: 'home', color: '#5271FF' },
      { id: 'philosophy' as PageId, label: 'Philosophy', icon: 'compass', color: '#B5B7F6' },
      { id: 'logo' as PageId, label: 'Logo & Brand', icon: 'diamond', color: '#E5C3F0' },
    ],
  },
  {
    section: 'Foundation',
    items: [
      { id: 'colors' as PageId, label: 'Colors', icon: 'palette', color: '#5271FF' },
      { id: 'typography' as PageId, label: 'Typography', icon: 'type', color: '#B5B7F6' },
      { id: 'gradients' as PageId, label: 'Gradients', icon: 'gradient', color: '#E5C3F0' },
      { id: 'radius' as PageId, label: 'Border Radius', icon: 'square', color: '#ACE1E4' },
      { id: 'spacing' as PageId, label: 'Spacing', icon: 'ruler', color: '#5271FF' },
      { id: 'shadows' as PageId, label: 'Shadows', icon: 'layers', color: '#B5B7F6' },
    ],
  },
  {
    section: 'Components',
    items: [
      { id: 'buttons' as PageId, label: 'Button', icon: 'click', color: '#5271FF' },
      { id: 'inputs' as PageId, label: 'TextField', icon: 'input', color: '#B5B7F6' },
      { id: 'tabs' as PageId, label: 'Tabs', icon: 'tabs', color: '#E5C3F0' },
      { id: 'chips' as PageId, label: 'Chip', icon: 'tag', color: '#ACE1E4' },
      { id: 'badges' as PageId, label: 'Badge', icon: 'badge', color: '#5271FF' },
      { id: 'avatar' as PageId, label: 'Avatar', icon: 'user', color: '#B5B7F6' },
      { id: 'toggle' as PageId, label: 'Toggle', icon: 'toggle', color: '#E5C3F0' },
      { id: 'cards' as PageId, label: 'Card', icon: 'card', color: '#ACE1E4' },
      { id: 'navigation' as PageId, label: 'Sidebar Menu', icon: 'menu', color: '#5271FF' },
      { id: 'list-item' as PageId, label: 'List Item', icon: 'list', color: '#B5B7F6' },
      { id: 'chat-input' as PageId, label: 'ChatInput', icon: 'message', color: '#E5C3F0' },
      { id: 'social-button' as PageId, label: 'Social Button', icon: 'share', color: '#ACE1E4' },
      { id: 'modal' as PageId, label: 'Modal', icon: 'popup', color: '#5271FF' },
      { id: 'tooltip' as PageId, label: 'Tooltip', icon: 'info', color: '#B5B7F6' },
      { id: 'divider' as PageId, label: 'Divider', icon: 'minus', color: '#E5C3F0' },
      { id: 'data-display' as PageId, label: 'Table & KPI', icon: 'chart', color: '#ACE1E4' },
    ],
  },
]

const PAGES: Record<PageId, React.FC> = {
  home: HomePage,
  philosophy: PhilosophyPage,
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

function NavIcon({ name }: { name: string }) {
  const s = { width: 15, height: 15, strokeWidth: 1.5, stroke: 'currentColor', fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const icons: Record<string, React.ReactNode> = {
    home: <svg {...s} viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    compass: <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
    diamond: <svg {...s} viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 13L2 9z"/></svg>,
    palette: <svg {...s} viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="6.5" cy="12" r="1.5" fill="currentColor" stroke="none"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
    type: <svg {...s} viewBox="0 0 24 24"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>,
    gradient: <svg {...s} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9" opacity="0.3"/><line x1="3" y1="15" x2="21" y2="15" opacity="0.5"/></svg>,
    square: <svg {...s} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/></svg>,
    ruler: <svg {...s} viewBox="0 0 24 24"><path d="M21.3 15.3l-5.6-5.6-1.4 1.4 2.1 2.1-1.4 1.4-2.1-2.1-1.4 1.4 2.1 2.1-1.4 1.4-2.1-2.1-1.4 1.4 5.6 5.6c.8.8 2 .8 2.8 0l4.2-4.2c.8-.8.8-2.1 0-2.8z"/></svg>,
    layers: <svg {...s} viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    click: <svg {...s} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 12h8" opacity="0.5"/></svg>,
    input: <svg {...s} viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="10" x2="6" y2="14"/></svg>,
    tabs: <svg {...s} viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M8 6v4"/><path d="M14" y1="6" y2="10"/></svg>,
    tag: <svg {...s} viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    badge: <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>,
    user: <svg {...s} viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    toggle: <svg {...s} viewBox="0 0 24 24"><rect x="1" y="5" width="22" height="14" rx="7"/><circle cx="16" cy="12" r="3"/></svg>,
    card: <svg {...s} viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>,
    menu: <svg {...s} viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="18" y2="18"/></svg>,
    list: <svg {...s} viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="4" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1" fill="currentColor" stroke="none"/></svg>,
    message: <svg {...s} viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    share: <svg {...s} viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
    popup: <svg {...s} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>,
    info: <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
    minus: <svg {...s} viewBox="0 0 24 24"><line x1="4" y1="12" x2="20" y2="12"/></svg>,
    chart: <svg {...s} viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  }
  return <span className="nav-icon">{icons[name] || null}</span>
}

function App() {
  const [activePage, setActivePage] = useState<PageId>('home')
  const [toast, setToast] = useState<string | null>(null)

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text)
    setToast(`Copied: ${text}`)
    setTimeout(() => setToast(null), 1800)
  }, [])

  const PageComponent = PAGES[activePage]
  const isHome = activePage === 'home'

  return (
    <CopyContext.Provider value={copyToClipboard}>
      <div className="app">
        <div className="galaxy-bg">
          <div className="stars" />
        </div>

        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-logo" onClick={() => setActivePage('home')} style={{ cursor: 'pointer' }}>
              <div className="logo-mark">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="cosmos-g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ACE1E4"/>
                      <stop offset="35%" stopColor="#5271FF"/>
                      <stop offset="65%" stopColor="#B5B7F6"/>
                      <stop offset="100%" stopColor="#E5C3F0"/>
                    </linearGradient>
                    <linearGradient id="cosmos-r" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#5271FF" stopOpacity="0.6"/>
                      <stop offset="50%" stopColor="#B5B7F6"/>
                      <stop offset="100%" stopColor="#E5C3F0" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <circle cx="16" cy="16" r="6" fill="url(#cosmos-g)"/>
                  <ellipse cx="16" cy="16" rx="13" ry="4.5" fill="none" stroke="url(#cosmos-r)" strokeWidth="1.3" transform="rotate(-20 16 16)"/>
                  <circle cx="25" cy="10" r="1" fill="#ACE1E4" opacity="0.8"/>
                  <circle cx="7" cy="22" r="0.8" fill="#E5C3F0" opacity="0.6"/>
                </svg>
              </div>
              <span className="logo-text">Cosmos</span>
            </div>
            <div className="sidebar-version">HumAIne Design System</div>
          </div>
          <nav className="sidebar-nav">
            {NAV.map((group) => (
              <div key={group.section || 'top'} className="nav-section">
                {group.section && <div className="nav-section-title">{group.section}</div>}
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                    onClick={() => setActivePage(item.id)}
                  >
                    <NavIcon name={item.icon} />
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        <main className={`main-content ${isHome ? 'home-mode' : ''}`} key={activePage}>
          {!isHome && <div className="page-glow" />}
          <div className={isHome ? '' : 'page-content'}>
            <PageComponent />
          </div>
        </main>

        {toast && <div className="copy-toast">{toast}</div>}
      </div>
    </CopyContext.Provider>
  )
}

export default App
