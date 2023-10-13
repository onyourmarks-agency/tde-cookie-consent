import { type Writable, writable } from 'svelte/store';
import type { SectionType } from '../_types/section';
import { TDECC_SECTION_INDEX } from '../config/sections';

export const activeSection = writable(TDECC_SECTION_INDEX) as Writable<SectionType | null>;