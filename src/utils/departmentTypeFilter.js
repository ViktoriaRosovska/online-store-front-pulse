export const departmentTypeFilter = (data, type) =>
  data?.data?.filter(el => type.includes(el.CategoryOfWarehouse));
