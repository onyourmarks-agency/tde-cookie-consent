import {
  OYMCC_SECTION_EXPLANATION,
  OYMCC_SECTION_MANAGE,
  OYMCC_SECTION_START,
} from '../config/sections';

export type SectionType =
  | typeof OYMCC_SECTION_EXPLANATION
  | typeof OYMCC_SECTION_MANAGE
  | typeof OYMCC_SECTION_START;
