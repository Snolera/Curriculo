import { act, renderHook } from '@testing-library/react';
import { useScrollSpy } from './useScrollSpy';

const IDS = ['sobre', 'projetos', 'formacao'];

// Cria as seções com o "top" controlado pelo teste
function mountSections(tops) {
  document.body.innerHTML = '';
  IDS.forEach((id) => {
    const el = document.createElement('section');
    el.id = id;
    el.getBoundingClientRect = () => ({ top: tops[id] });
    document.body.appendChild(el);
  });
}

// Fila de frames: como no navegador, o callback roda depois, não na hora
let frames = [];
const flushFrames = () =>
  act(() => {
    const queued = frames;
    frames = [];
    queued.forEach((cb) => cb());
  });

const scroll = () => {
  window.dispatchEvent(new Event('scroll'));
  flushFrames();
};

beforeEach(() => {
  frames = [];
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => frames.push(cb));
  vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});
  window.innerHeight = 1000; // linha de ativação em 350px
  window.scrollY = 0;
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: 5000,
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('useScrollSpy', () => {
  it('começa na primeira seção', () => {
    mountSections({ sobre: 400, projetos: 1200, formacao: 2400 });
    const { result } = renderHook(() => useScrollSpy(IDS));
    flushFrames();
    expect(result.current).toBe('sobre');
  });

  it('ativa a última seção cujo topo passou de 35% da viewport', () => {
    mountSections({ sobre: 400, projetos: 1200, formacao: 2400 });
    const { result } = renderHook(() => useScrollSpy(IDS));
    flushFrames();

    mountSections({ sobre: -900, projetos: 300, formacao: 1500 });
    scroll();
    expect(result.current).toBe('projetos');
  });

  it('ativa a última seção quando chega ao fim da página', () => {
    mountSections({ sobre: -3000, projetos: -2000, formacao: 600 });
    const { result } = renderHook(() => useScrollSpy(IDS));
    flushFrames();
    expect(result.current).toBe('projetos');

    window.scrollY = 4000; // 4000 + 1000 >= 5000
    scroll();
    expect(result.current).toBe('formacao');
  });
});
