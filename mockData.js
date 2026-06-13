// Default data for Shoe Spa Order Management Webapp

const DEFAULT_SERVICES = [
  // VỆ SINH GIÀY
  { id: 'vs-giay', name: 'Vệ sinh giày', category: 'Vệ sinh giày', defaultPrice: 80000, priceRange: '60.000 - 100.000đ' },
  { id: 'vs-tre-em', name: 'Vệ sinh giày trẻ em', category: 'Vệ sinh giày', defaultPrice: 40000, priceRange: '40.000đ' },
  { id: 'vs-da-boot', name: 'Vệ sinh giày da, boot, da lộn', category: 'Vệ sinh giày', defaultPrice: 105000, priceRange: '90.000 - 120.000đ' },
  { id: 'vs-dep', name: 'Vệ sinh dép', category: 'Vệ sinh giày', defaultPrice: 45000, priceRange: '45.000đ' },

  // THAY ĐẾ GIÀY
  { id: 'thay-de-the-thao', name: 'Thay đế giày thể thao', category: 'Thay đế giày', defaultPrice: 400000, priceRange: '350.000 - 450.000đ' },

  // TẨY Ố
  { id: 'tay-o-than', name: 'Tẩy ố, mốc thân giày', category: 'Tẩy ố', defaultPrice: 120000, priceRange: '120.000đ' },
  { id: 'tay-o-de', name: 'Tẩy ố đế', category: 'Tẩy ố', defaultPrice: 150000, priceRange: '150.000đ' },

  // REPAINT
  { id: 'repaint-de', name: 'Repaint đế', category: 'Repaint', defaultPrice: 200000, priceRange: '200.000đ' },
  { id: 'repaint-than', name: 'Repaint thân', category: 'Repaint', defaultPrice: 300000, priceRange: '200.000 - 400.000đ' },

  // DÁN ĐẾ GIÀY
  { id: 'dan-bong-keo', name: 'Dán bong keo', category: 'Dán đế giày', defaultPrice: 140000, priceRange: '30.000 - 250.000đ' },
  { id: 'dan-de-the-thao', name: 'Dán đế giày thể thao', category: 'Dán đế giày', defaultPrice: 310000, priceRange: '270.000 - 350.000đ' },
  { id: 'dan-de-cao-su', name: 'Dán đế cao su', category: 'Dán đế giày', defaultPrice: 300000, priceRange: '200.000 - 400.000đ' }
];

const DEFAULT_USERS = [
  { id: 'u-admin', email: 'admin@phuibui.vn', password: 'admin', name: 'Nguyễn Văn Admin', role: 'admin' },
  { id: 'u-staff-1', email: 'nhanvien@phuibui.vn', password: 'staff', name: 'Trần Văn Nhân Viên', role: 'staff' },
  { id: 'u-staff-2', email: 'hoang.nv@phuibui.vn', password: 'staff', name: 'Hoàng Nhân Viên', role: 'staff' }
];

const BRAND_INFO = {
  name: 'SPA GIÀY',
  phone: '0906 22 7512',
  address: 'N07C - LK19, DỊCH VỤ VẠN PHÚC, VẠN PHÚC, HÀ NỘI'
};

// Initial orders with SVG placeholders as base64 or inline images
const INITIAL_ORDERS = [
  {
    id: 'PB-1001',
    customerName: 'Nguyễn Hoàng Long',
    customerPhone: '0912345678',
    shoeInfo: 'Nike Air Force 1 White',
    services: [
      { id: 'vs-giay', name: 'Vệ sinh giày', price: 80000 },
      { id: 'tay-o-de', name: 'Tẩy ố đế', price: 150000 }
    ],
    totalPrice: 230000,
    status: 'completed', // pending, processing, completed, delivered, cancelled
    image: '', // will fallback to SVG placeholder in app
    notes: 'Đế ố vàng nặng, cần tẩy kỹ',
    receivedDate: '2026-06-10T10:30:00',
    completedDate: '2026-06-12T14:20:00',
    staffId: 'u-staff-1',
    staffName: 'Trần Văn Nhân Viên'
  },
  {
    id: 'PB-1002',
    customerName: 'Lê Thị Mai',
    customerPhone: '0987654321',
    shoeInfo: 'Adidas Ultraboost Black',
    services: [
      { id: 'vs-giay', name: 'Vệ sinh giày', price: 80000 },
      { id: 'dan-de-the-thao', name: 'Dán đế giày thể thao', price: 310000 }
    ],
    totalPrice: 390000,
    status: 'processing',
    image: '',
    notes: 'Dán đế bảo vệ loại tốt',
    receivedDate: '2026-06-11T09:00:00',
    completedDate: null,
    staffId: 'u-staff-2',
    staffName: 'Hoàng Nhân Viên'
  },
  {
    id: 'PB-1003',
    customerName: 'Phạm Minh Đức',
    customerPhone: '0909998888',
    shoeInfo: 'Jordan 1 Retro High Chicago',
    services: [
      { id: 'vs-da-boot', name: 'Vệ sinh giày da, boot, da lộn', price: 105000 },
      { id: 'repaint-than', name: 'Repaint thân', price: 350000 }
    ],
    totalPrice: 455000,
    status: 'pending',
    image: '',
    notes: 'Cần repaint phần da màu đỏ bị xước ở gót',
    receivedDate: '2026-06-12T15:45:00',
    completedDate: null,
    staffId: 'u-staff-1',
    staffName: 'Trần Văn Nhân Viên'
  },
  {
    id: 'PB-1004',
    customerName: 'Trần Minh Tâm',
    customerPhone: '0901234567',
    shoeInfo: 'Adidas Forum Low White',
    services: [
      { id: 'vs-giay', name: 'Vệ sinh giày', price: 80000, quantity: 1 }
    ],
    totalPrice: 80000,
    status: 'paid',
    notes: 'Khách thanh toán chuyển khoản trước',
    receivedDate: '2026-06-12T11:00:00',
    completedDate: '2026-06-12T11:30:00',
    staffId: 'u-staff-1',
    staffName: 'Trần Văn Nhân Viên'
  }
];

if (typeof window !== 'undefined') {
  window.DEFAULT_SERVICES = DEFAULT_SERVICES;
  window.DEFAULT_USERS = DEFAULT_USERS;
  window.BRAND_INFO = BRAND_INFO;
  window.INITIAL_ORDERS = INITIAL_ORDERS;
}
