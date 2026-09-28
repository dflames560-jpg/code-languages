export type ProductIdea = {
  id: string;
  name: string;
  audience: string;
  cost: number;
  price: number;
  shipping: number;
  marketing: number;
  notes: string;
};

export type CampaignDraft = {
  id: string;
  channel: string;
  audience: string;
  product: string;
  angle: string;
  copy: string;
  createdAt: string;
};

export type CommerceState = {
  completedSteps: string[];
  launchChecks: string[];
  products: ProductIdea[];
  campaigns: CampaignDraft[];
};

const stateKey = "storecraft-workspace-v1";
const emptyState: CommerceState = { completedSteps: [], launchChecks: [], products: [], campaigns: [] };
const serverSnapshot = JSON.stringify(emptyState);

export function subscribeCommerceState(onChange: () => void) {
  window.addEventListener("storecraft-state-change", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("storecraft-state-change", onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function getCommerceSnapshot() {
  return window.localStorage.getItem(stateKey) ?? serverSnapshot;
}

export function getServerCommerceSnapshot() {
  return serverSnapshot;
}

export function saveCommerceState(state: CommerceState) {
  window.localStorage.setItem(stateKey, JSON.stringify(state));
  window.dispatchEvent(new Event("storecraft-state-change"));
}

export function parseCommerceState(snapshot: string): CommerceState {
  try {
    const parsed = JSON.parse(snapshot) as Partial<CommerceState>;
    return {
      completedSteps: Array.isArray(parsed.completedSteps) ? parsed.completedSteps : [],
      launchChecks: Array.isArray(parsed.launchChecks) ? parsed.launchChecks : [],
      products: Array.isArray(parsed.products) ? parsed.products : [],
      campaigns: Array.isArray(parsed.campaigns) ? parsed.campaigns : [],
    };
  } catch {
    return emptyState;
  }
}
