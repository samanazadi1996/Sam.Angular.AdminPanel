export class CreateProductDto implements ICreateProductDto {
  name?: string | undefined;
  price?: number | undefined;
  barCode?: string | undefined;

  init(data?: ICreateProductDto) {
    if (data) {
      this.name = data['name'];
      this.price = data['price'];
      this.barCode = data['barCode'];
    }
  }
}

export interface ICreateProductDto {
  name?: string | undefined;
  price?: number | undefined;
  barCode?: string | undefined;
}
