const IdProider = models => {
  let count = 0;
  count = (models[models.length - 1].id) + 1;
  return count;
}

export default IdProider;
