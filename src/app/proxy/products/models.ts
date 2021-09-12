import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateProductDto {
  brand: string;
  name: string;
  description?: string;
  imageUrl: string;
}

export interface ProductDto extends AuditedEntityDto<string> {
  brand?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
}
