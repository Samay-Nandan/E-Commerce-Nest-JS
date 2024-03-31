export interface AdminDto {
  token: string;
}

export interface AdminState {
  loading: boolean;
  admin: AdminDto;
}
