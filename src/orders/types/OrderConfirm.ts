/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderErrorCode, AddressTypeEnum, GiftCardEventsEnum, OrderDiscountType, DiscountValueTypeEnum, OrderEventsEmailsEnum, OrderEventsEnum, FulfillmentStatus, PaymentChargeStatusEnum, WarehouseClickAndCollectOptionEnum, OrderStatus, OrderAction, JobStatusEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: OrderConfirm
// ====================================================

export interface OrderConfirm_orderConfirm_errors {
  __typename: "OrderError";
  code: OrderErrorCode;
  field: string | null;
  addressType: AddressTypeEnum | null;
}

export interface OrderConfirm_orderConfirm_order_metadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface OrderConfirm_orderConfirm_order_privateMetadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface OrderConfirm_orderConfirm_order_billingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface OrderConfirm_orderConfirm_order_billingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: OrderConfirm_orderConfirm_order_billingAddress_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface OrderConfirm_orderConfirm_order_giftCards_events_balance_initialBalance {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_giftCards_events_balance_currentBalance {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_giftCards_events_balance_oldInitialBalance {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_giftCards_events_balance_oldCurrentBalance {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_giftCards_events_balance {
  __typename: "GiftCardEventBalance";
  initialBalance: OrderConfirm_orderConfirm_order_giftCards_events_balance_initialBalance | null;
  currentBalance: OrderConfirm_orderConfirm_order_giftCards_events_balance_currentBalance;
  oldInitialBalance: OrderConfirm_orderConfirm_order_giftCards_events_balance_oldInitialBalance | null;
  oldCurrentBalance: OrderConfirm_orderConfirm_order_giftCards_events_balance_oldCurrentBalance | null;
}

export interface OrderConfirm_orderConfirm_order_giftCards_events {
  __typename: "GiftCardEvent";
  id: string;
  type: GiftCardEventsEnum | null;
  orderId: string | null;
  balance: OrderConfirm_orderConfirm_order_giftCards_events_balance | null;
}

export interface OrderConfirm_orderConfirm_order_giftCards {
  __typename: "GiftCard";
  events: OrderConfirm_orderConfirm_order_giftCards_events[];
}

export interface OrderConfirm_orderConfirm_order_discounts_amount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_discounts {
  __typename: "OrderDiscount";
  id: string;
  type: OrderDiscountType;
  calculationMode: DiscountValueTypeEnum;
  value: any;
  reason: string | null;
  amount: OrderConfirm_orderConfirm_order_discounts_amount;
}

export interface OrderConfirm_orderConfirm_order_events_discount_amount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_events_discount_oldAmount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_events_discount {
  __typename: "OrderEventDiscountObject";
  valueType: DiscountValueTypeEnum;
  value: any;
  reason: string | null;
  amount: OrderConfirm_orderConfirm_order_events_discount_amount | null;
  oldValueType: DiscountValueTypeEnum | null;
  oldValue: any | null;
  oldAmount: OrderConfirm_orderConfirm_order_events_discount_oldAmount | null;
}

export interface OrderConfirm_orderConfirm_order_events_relatedOrder {
  __typename: "Order";
  id: string;
  number: string | null;
}

export interface OrderConfirm_orderConfirm_order_events_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface OrderConfirm_orderConfirm_order_events_app {
  __typename: "App";
  id: string;
  name: string | null;
  appUrl: string | null;
}

export interface OrderConfirm_orderConfirm_order_events_lines_discount_amount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_events_lines_discount_oldAmount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_events_lines_discount {
  __typename: "OrderEventDiscountObject";
  valueType: DiscountValueTypeEnum;
  value: any;
  reason: string | null;
  amount: OrderConfirm_orderConfirm_order_events_lines_discount_amount | null;
  oldValueType: DiscountValueTypeEnum | null;
  oldValue: any | null;
  oldAmount: OrderConfirm_orderConfirm_order_events_lines_discount_oldAmount | null;
}

export interface OrderConfirm_orderConfirm_order_events_lines_orderLine {
  __typename: "OrderLine";
  id: string;
  productName: string;
  variantName: string;
}

export interface OrderConfirm_orderConfirm_order_events_lines {
  __typename: "OrderEventOrderLineObject";
  quantity: number | null;
  itemName: string | null;
  discount: OrderConfirm_orderConfirm_order_events_lines_discount | null;
  orderLine: OrderConfirm_orderConfirm_order_events_lines_orderLine | null;
}

export interface OrderConfirm_orderConfirm_order_events {
  __typename: "OrderEvent";
  id: string;
  amount: number | null;
  shippingCostsIncluded: boolean | null;
  date: any | null;
  email: string | null;
  emailType: OrderEventsEmailsEnum | null;
  invoiceNumber: string | null;
  discount: OrderConfirm_orderConfirm_order_events_discount | null;
  relatedOrder: OrderConfirm_orderConfirm_order_events_relatedOrder | null;
  message: string | null;
  quantity: number | null;
  transactionReference: string | null;
  type: OrderEventsEnum | null;
  user: OrderConfirm_orderConfirm_order_events_user | null;
  app: OrderConfirm_orderConfirm_order_events_app | null;
  lines: (OrderConfirm_orderConfirm_order_events_lines | null)[] | null;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_variant_preorder {
  __typename: "PreorderData";
  isPreorder: boolean;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_variant {
  __typename: "ProductVariant";
  id: string;
  quantityAvailable: number;
  preorder: OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_variant_preorder | null;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_unitDiscount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_undiscountedUnitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_undiscountedUnitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_undiscountedUnitPrice {
  __typename: "TaxedMoney";
  currency: string;
  gross: OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_undiscountedUnitPrice_gross;
  net: OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_undiscountedUnitPrice_net;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_unitPrice {
  __typename: "TaxedMoney";
  gross: OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_unitPrice_gross;
  net: OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_unitPrice_net;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_thumbnail {
  __typename: "Image";
  url: string;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine {
  __typename: "OrderLine";
  id: string;
  isShippingRequired: boolean;
  variant: OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_variant | null;
  productName: string;
  productSku: string | null;
  quantity: number;
  quantityFulfilled: number;
  quantityToFulfill: number;
  unitDiscount: OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_unitDiscount;
  unitDiscountValue: any;
  unitDiscountReason: string | null;
  unitDiscountType: DiscountValueTypeEnum | null;
  undiscountedUnitPrice: OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_undiscountedUnitPrice;
  unitPrice: OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_unitPrice;
  thumbnail: OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine_thumbnail | null;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_lines {
  __typename: "FulfillmentLine";
  id: string;
  quantity: number;
  orderLine: OrderConfirm_orderConfirm_order_fulfillments_lines_orderLine | null;
}

export interface OrderConfirm_orderConfirm_order_fulfillments_warehouse {
  __typename: "Warehouse";
  id: string;
  name: string;
}

export interface OrderConfirm_orderConfirm_order_fulfillments {
  __typename: "Fulfillment";
  id: string;
  lines: (OrderConfirm_orderConfirm_order_fulfillments_lines | null)[] | null;
  fulfillmentOrder: number;
  status: FulfillmentStatus;
  trackingNumber: string;
  warehouse: OrderConfirm_orderConfirm_order_fulfillments_warehouse | null;
}

export interface OrderConfirm_orderConfirm_order_lines_variant_preorder {
  __typename: "PreorderData";
  isPreorder: boolean;
}

export interface OrderConfirm_orderConfirm_order_lines_variant {
  __typename: "ProductVariant";
  id: string;
  quantityAvailable: number;
  preorder: OrderConfirm_orderConfirm_order_lines_variant_preorder | null;
}

export interface OrderConfirm_orderConfirm_order_lines_unitDiscount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_lines_undiscountedUnitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_lines_undiscountedUnitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_lines_undiscountedUnitPrice {
  __typename: "TaxedMoney";
  currency: string;
  gross: OrderConfirm_orderConfirm_order_lines_undiscountedUnitPrice_gross;
  net: OrderConfirm_orderConfirm_order_lines_undiscountedUnitPrice_net;
}

export interface OrderConfirm_orderConfirm_order_lines_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_lines_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_lines_unitPrice {
  __typename: "TaxedMoney";
  gross: OrderConfirm_orderConfirm_order_lines_unitPrice_gross;
  net: OrderConfirm_orderConfirm_order_lines_unitPrice_net;
}

export interface OrderConfirm_orderConfirm_order_lines_thumbnail {
  __typename: "Image";
  url: string;
}

export interface OrderConfirm_orderConfirm_order_lines {
  __typename: "OrderLine";
  id: string;
  isShippingRequired: boolean;
  variant: OrderConfirm_orderConfirm_order_lines_variant | null;
  productName: string;
  productSku: string | null;
  quantity: number;
  quantityFulfilled: number;
  quantityToFulfill: number;
  unitDiscount: OrderConfirm_orderConfirm_order_lines_unitDiscount;
  unitDiscountValue: any;
  unitDiscountReason: string | null;
  unitDiscountType: DiscountValueTypeEnum | null;
  undiscountedUnitPrice: OrderConfirm_orderConfirm_order_lines_undiscountedUnitPrice;
  unitPrice: OrderConfirm_orderConfirm_order_lines_unitPrice;
  thumbnail: OrderConfirm_orderConfirm_order_lines_thumbnail | null;
}

export interface OrderConfirm_orderConfirm_order_shippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface OrderConfirm_orderConfirm_order_shippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: OrderConfirm_orderConfirm_order_shippingAddress_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface OrderConfirm_orderConfirm_order_deliveryMethod_ShippingMethod {
  __typename: "ShippingMethod";
  id: string;
}

export interface OrderConfirm_orderConfirm_order_deliveryMethod_Warehouse {
  __typename: "Warehouse";
  id: string;
  clickAndCollectOption: WarehouseClickAndCollectOptionEnum;
}

export type OrderConfirm_orderConfirm_order_deliveryMethod = OrderConfirm_orderConfirm_order_deliveryMethod_ShippingMethod | OrderConfirm_orderConfirm_order_deliveryMethod_Warehouse;

export interface OrderConfirm_orderConfirm_order_shippingMethod {
  __typename: "ShippingMethod";
  id: string;
}

export interface OrderConfirm_orderConfirm_order_shippingPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_shippingPrice {
  __typename: "TaxedMoney";
  gross: OrderConfirm_orderConfirm_order_shippingPrice_gross;
}

export interface OrderConfirm_orderConfirm_order_subtotal_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_subtotal_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_subtotal {
  __typename: "TaxedMoney";
  gross: OrderConfirm_orderConfirm_order_subtotal_gross;
  net: OrderConfirm_orderConfirm_order_subtotal_net;
}

export interface OrderConfirm_orderConfirm_order_total_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_total_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_total_tax {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_total {
  __typename: "TaxedMoney";
  gross: OrderConfirm_orderConfirm_order_total_gross;
  net: OrderConfirm_orderConfirm_order_total_net;
  tax: OrderConfirm_orderConfirm_order_total_tax;
}

export interface OrderConfirm_orderConfirm_order_totalAuthorized {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_totalCaptured {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_undiscountedTotal_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_undiscountedTotal_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_undiscountedTotal {
  __typename: "TaxedMoney";
  net: OrderConfirm_orderConfirm_order_undiscountedTotal_net;
  gross: OrderConfirm_orderConfirm_order_undiscountedTotal_gross;
}

export interface OrderConfirm_orderConfirm_order_user {
  __typename: "User";
  id: string;
  email: string;
}

export interface OrderConfirm_orderConfirm_order_availableShippingMethods_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderConfirm_orderConfirm_order_availableShippingMethods {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: OrderConfirm_orderConfirm_order_availableShippingMethods_price | null;
}

export interface OrderConfirm_orderConfirm_order_invoices {
  __typename: "Invoice";
  id: string;
  number: string | null;
  createdAt: any;
  url: string | null;
  status: JobStatusEnum;
}

export interface OrderConfirm_orderConfirm_order_channel {
  __typename: "Channel";
  isActive: boolean;
  id: string;
  name: string;
  currencyCode: string;
  slug: string;
}

export interface OrderConfirm_orderConfirm_order {
  __typename: "Order";
  id: string;
  metadata: (OrderConfirm_orderConfirm_order_metadata | null)[];
  privateMetadata: (OrderConfirm_orderConfirm_order_privateMetadata | null)[];
  billingAddress: OrderConfirm_orderConfirm_order_billingAddress | null;
  giftCards: (OrderConfirm_orderConfirm_order_giftCards | null)[] | null;
  isShippingRequired: boolean;
  canFinalize: boolean;
  created: any;
  customerNote: string;
  discounts: OrderConfirm_orderConfirm_order_discounts[] | null;
  events: (OrderConfirm_orderConfirm_order_events | null)[] | null;
  fulfillments: (OrderConfirm_orderConfirm_order_fulfillments | null)[];
  lines: (OrderConfirm_orderConfirm_order_lines | null)[];
  number: string | null;
  isPaid: boolean;
  paymentStatus: PaymentChargeStatusEnum;
  shippingAddress: OrderConfirm_orderConfirm_order_shippingAddress | null;
  deliveryMethod: OrderConfirm_orderConfirm_order_deliveryMethod | null;
  shippingMethod: OrderConfirm_orderConfirm_order_shippingMethod | null;
  shippingMethodName: string | null;
  collectionPointName: string | null;
  shippingPrice: OrderConfirm_orderConfirm_order_shippingPrice;
  status: OrderStatus;
  subtotal: OrderConfirm_orderConfirm_order_subtotal;
  total: OrderConfirm_orderConfirm_order_total;
  actions: (OrderAction | null)[];
  totalAuthorized: OrderConfirm_orderConfirm_order_totalAuthorized;
  totalCaptured: OrderConfirm_orderConfirm_order_totalCaptured;
  undiscountedTotal: OrderConfirm_orderConfirm_order_undiscountedTotal;
  user: OrderConfirm_orderConfirm_order_user | null;
  userEmail: string | null;
  availableShippingMethods: (OrderConfirm_orderConfirm_order_availableShippingMethods | null)[] | null;
  invoices: (OrderConfirm_orderConfirm_order_invoices | null)[] | null;
  channel: OrderConfirm_orderConfirm_order_channel;
}

export interface OrderConfirm_orderConfirm {
  __typename: "OrderConfirm";
  errors: OrderConfirm_orderConfirm_errors[];
  order: OrderConfirm_orderConfirm_order | null;
}

export interface OrderConfirm {
  orderConfirm: OrderConfirm_orderConfirm | null;
}

export interface OrderConfirmVariables {
  id: string;
}
