export class ProductDto implements IProductDto {
  id?: number | undefined;
  name?: string | undefined;
  price?: number | undefined;
  barCode?: string | undefined;

  init(data?: IProductDto) {
    if (data) {
      this.id = data['id'];
      this.name = data['name'];
      this.price = data['price'];
      this.barCode = data['barCode'];
    }
  }
}
export interface IProductDto {
  id?: number | undefined;
  name?: string | undefined;
  price?: number | undefined;
  barCode?: string | undefined;
}
