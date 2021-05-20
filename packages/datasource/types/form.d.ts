type SelectItem = {
  value: string | number;
  label: string;
};

type Province = {
  statistical_code: string;
  code: string;
  name: string;
  cites: City[];
};

type City = {
  statistical_code: string;
  code: string;
  name: string;
};

export type form = {
  readonly org: {
    readonly enums: {
      readonly organizationTypes: SelectItem[];
      readonly personalPositions: SelectItem[];
      readonly organizationSizes: SelectItem[];
      readonly provinces;
    };
  };
};
