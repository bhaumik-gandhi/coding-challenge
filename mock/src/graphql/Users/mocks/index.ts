import * as casual from 'casual';
import { MockList } from 'graphql-tools';

export const User = () => ({
  firstName: casual.first_name,
  lastName: casual.last_name,
  email: casual.email,
  phone: casual.phone
});

export const Query = () => ({
  users: (_,__,___) => new MockList([10,20])
});

export const Address = () => ({
  firstLine: casual.address1,
  secondLine: casual.address2,
  city: casual.city,
  state: casual.state_abbr,
  country: 'US',
  zipcode: casual.zip,
  geo: {
    lat: casual.latitude,
    lon: casual.longitude,
  },
});
