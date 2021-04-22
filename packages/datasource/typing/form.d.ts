type SelectItem = {
  value: string | number
  label: string
}

export type form = {
  readonly org: {
    readonly enums: {
      readonly organizationTypes: SelectItem[],
      readonly personalPositions: SelectItem[],
      readonly organizationSizes: SelectItem[],
    },
  };
}
