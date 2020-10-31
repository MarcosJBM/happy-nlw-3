import Orphanage from "../models/Orphanage";

import imagesView from "./images_view";

export default {
  render(orphange: Orphanage) {
    return {
      id: orphange.id,
      name: orphange.name,
      latitude: orphange.latitude,
      longitude: orphange.longitude,
      about: orphange.about,
      instructions: orphange.instructions,
      opening_hours: orphange.opening_hours,
      open_on_weekends: orphange.open_on_weekends,
      images: imagesView.renderMany(orphange.images),
    };
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};
