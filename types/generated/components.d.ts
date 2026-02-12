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
    carrier: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
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
