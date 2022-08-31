import { Injectable, PipeTransform } from '@vodyani/core';

import { isMulterFile, toDeepCamelCase } from '../method';

@Injectable()
export class DtoCamelCasePipe implements PipeTransform<any> {
  public async transform(data: any) {
    return isMulterFile(data) ? data : toDeepCamelCase(data);
  }
}
