import type { Schema, Struct } from '@strapi/strapi';

export interface CommonAddress extends Struct.ComponentSchema {
  collectionName: 'components_common_addresses';
  info: {
    displayName: 'address';
  };
  attributes: {
    address1: Schema.Attribute.String;
    address2: Schema.Attribute.String;
    city: Schema.Attribute.String;
    company: Schema.Attribute.String;
    country: Schema.Attribute.String;
    fullName: Schema.Attribute.String;
    phone: Schema.Attribute.BigInteger;
    postalCode: Schema.Attribute.String;
  };
}

export interface CommonShipping extends Struct.ComponentSchema {
  collectionName: 'components_common_shippings';
  info: {
    displayName: 'shipping';
  };
  attributes: {
    carrier_code: Schema.Attribute.String & Schema.Attribute.Required;
    carrier_name: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
    currency: Schema.Attribute.String & Schema.Attribute.Required;
    delivery_method_type: Schema.Attribute.Enumeration<
      ['standard_delivery', 'service_point_delivery']
    > &
      Schema.Attribute.Required;
    house_number: Schema.Attribute.String;
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.Decimal;
    method_title: Schema.Attribute.String & Schema.Attribute.Required;
    postal_code: Schema.Attribute.String;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    service_point_code: Schema.Attribute.String;
    service_point_id: Schema.Attribute.String;
    service_point_name: Schema.Attribute.String;
    shipping_option_id: Schema.Attribute.String & Schema.Attribute.Required;
    street: Schema.Attribute.String;
    weight_g: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_product_variants';
  info: {
    displayName: 'variant';
  };
  attributes: {
    ml: Schema.Attribute.Integer;
    price: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.address': CommonAddress;
      'common.shipping': CommonShipping;
      'product.variant': ProductVariant;
    }
  }
}
