export interface ApiParkInfo {
  version: string;
  type: 'object' | 'list' | 'none';
  count: number;
}

export interface ApiResponse<T> {
  results: T[] | T;
  info: ApiParkInfo;
}
