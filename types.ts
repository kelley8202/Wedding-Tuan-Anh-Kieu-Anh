export interface TimelineEvent {
  id: number;
  time: string;
  title: string;
  description: string;
  icon?: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption?: string;
  width?: number; // Optional for masonry layout logic if needed
  height?: number;
}

export interface BankInfo {
  bankName: string;
  accountNumber: string;
  accountName: string;
  qrUrl: string;
  branch?: string;
}

export enum RelationshipType {
  FRIEND = 'Bạn bè',
  FAMILY = 'Người thân',
  COLLEAGUE = 'Đồng nghiệp',
  BEST_FRIEND = 'Bạn thân',
  SOCIAL = 'Xã giao'
}