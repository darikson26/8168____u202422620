import { ShowroomResource } from './showroom-resource.js';
import { ShowroomSection } from '../domain/showroom-section.entity.js';

export class ShowroomAssembler {
  static toEntityFromResource(resource) {
    return new ShowroomSection({ ...resource });
  }

  static toEntitiesFromResponse(response) {
    if (response.status !== 200) {
      return [];
    }

    return response.data.map((item) => this.toEntityFromResource(new ShowroomResource(item)));
  }

}

