const axios = require('axios');
const { expect } = require('chai');
const { StatusCodes } = require('http-status-codes');

describe('First Api Tests', () => {
  it('Consume GET Service', async () => {
    const response = await axios.get('https://httpbin.org/ip');

    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.data).to.have.property('origin');
  });

  it('Consume GET Service with query parameters', async () => {
    const query = {
      name: 'John',
      age: '31',
      city: 'New York'
    };

    const response = await axios.get('https://httpbin.org/get', { query });

    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.config.query).to.eql(query);
  });

  it('Consume HEAD Service', async () => {
    const response = await axios.head('https://httpbin.org/get');
    expect(response.data.length).to.eql(0);
  });

  it('Consume PATCH Service', async () => {
    const payload = { value: 23 };
    const response = await axios.patch('https://httpbin.org/patch', payload);

    expect(response.data.json).to.deep.equal(payload);
  });

  it('Consume PUT Service', async () => {
    const payload = { name: 'Joe' };
    const response = await axios.put('https://httpbin.org/put', payload);

    expect(response.data.json).to.deep.equal(payload);
  });

  it('Consume DELETE Service', async () => {
    const response = await axios.delete('https://httpbin.org/delete');

    expect(response.status).to.equal(StatusCodes.OK);
  });
});
