export const filterCategories = (categories) => {
  return categories
    .reduce(
      (ac, field) =>
        ac.includes(String(field.fieldValue).toLowerCase())
          ? ac
          : [...ac, String(field.fieldValue).toLowerCase()],
      [],
    )
    .sort((a, b) => a.localeCompare(b));
};

export const groupTagsByLetter = (
  categories: { fieldValue: string }[],
): Record<string, string[]> => {
  const tags = filterCategories(categories);
  return tags.reduce((acc: Record<string, string[]>, tag: string) => {
    const letter = tag[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(tag);
    return acc;
  }, {} as Record<string, string[]>);
};
