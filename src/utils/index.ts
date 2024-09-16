export const filterCategories = (categories) => {
  return categories.reduce(
    (ac, field) =>
      ac.includes(String(field.fieldValue).toLowerCase())
        ? ac
        : [...ac, String(field.fieldValue).toLowerCase()],
    []
  );
};
