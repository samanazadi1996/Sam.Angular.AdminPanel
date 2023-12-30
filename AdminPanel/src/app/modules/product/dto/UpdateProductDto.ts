export class UpdateProductDto implements IUpdateProductDto {
  id?: number | undefined;
  name?: string | undefined;
  price?: number | undefined;
  barCode?: string | undefined;

  init(data?: IUpdateProductDto) {
    if (data) {
      this.id = data['id'];
      this.name = data['name'];
      this.price = data['price'];
      this.barCode = data['barCode'];
    }
  }
}

export interface IUpdateProductDto {
  id?: number | undefined;
  name?: string | undefined;
  price?: number | undefined;
  barCode?: string | undefined;
}
