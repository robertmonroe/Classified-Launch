export interface DossierSection {
  id: string;
  title: string;
  isRedacted: boolean;
  content: string;
}

export interface AgentProfile {
  name: string;
  alias: string;
  status: 'ACTIVE' | 'MIA' | 'COMPROMISED';
  specialty: string;
}

export enum SecurityLevel {
  LOCKED = 0,
  SCANNING = 1,
  GRANTED = 2,
}
