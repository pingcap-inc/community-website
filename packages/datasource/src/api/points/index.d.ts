import { ApiRequestFunction } from '../index';

export interface GetMeData {
  current_level: number;
  current_points: number;
  current_exps: number;
  current_rank: number;
  is_today_checked: boolean;
  level_desc: LevelDesc;
}

export interface LevelDesc {
  min_exps: number;
  max_exps: number;
  progress: number;
}

export const getMe: ApiRequestFunction<void, { data: GetMeData }>;


export interface CheckInData {
  continues_checkin_count: number;
  points: number;
  tomorrow_points: number;
}

export const checkIn: ApiRequestFunction<void, { data: CheckInData }>;


interface ProductDataEntry {
  id: number;
  name: string;
  cover_url: string;
  points: number;
  remains: number;
}

export const getProducts: ApiRequestFunction<void, { data: ProductDataEntry[] }>;
export const sendCode: ApiRequestFunction<{ phone: string }, any>;

interface RedeemData {
  redeem_success: boolean;
  redeem_record_id: number;
  comment: string;
}

export const redeem: ApiRequestFunction<{
  product_id: number;
  consignee_name: string;
  consignee_phone: string;
  consignee_phone_code: string;
  consignee_addrss: string;
  comment: string;
}, { data: RedeemData }>;

export interface RedeemRecordEntry {
  product_id: number;
  product_name: string;
  points: number;
  consignee_name: string;
  consignee_phone: string;
  consignee_addrss: string;
  comment: string;
  courier_company: string;
  tracking_number: string;
  created_at: string;
}

export const getRedeemRecords: ApiRequestFunction<void, { data: RedeemRecordEntry }>;

interface AwardedPointEntry {
  digest: string;
  points: number;
  exps: number;
  comment: string;
  created_at: string;
}

export const getAwardedPoints: ApiRequestFunction<{ currentPage: number, perPage: number },
  { data: AwardedPointEntry[], total_num: number, per_page: number, cur_page: number }>;