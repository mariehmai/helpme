export interface EmergencyNumber {
  Country: {
    Name: string;
    ISOCode: string;
  };
  Ambulance: { All: string[] };
  Police: { All: string[] };
  Fire: { All: string[] };
}

export interface ServiceType {
  key: string;
  i18nKey: string;
  emoji: string;
}

export const serviceTypes: ServiceType[] = [
  { key: "ambulance", i18nKey: "service.ambulance", emoji: "🚑" },
  { key: "police", i18nKey: "service.police", emoji: "👮" },
  { key: "fire", i18nKey: "service.fire", emoji: "🚒" },
];

export const ITEMS_PER_PAGE = 20;
