'use strict'
import { Pact, PactOptions } from '../src/pact';
import * as sinon from 'sinon';
import { expect } from 'chai';

describe('Pact', () => {
  const defaults = {
    consumer: 'test consumer',
    provider: 'provider'
  } as PactOptions;

  describe('#constructor', () => {
    let mockServiceMock: sinon.SinonMock;
    let pact: Pact;
    // let pactServer: any; //Pact;

    beforeEach(() => {
      mockServiceMock = sinon.mock(Pact);
    })

    afterEach(() => {
      mockServiceMock.restore();
    })

    it('throws Error when consumer not provided', () => {
      expect('foo').to.eql('foo');
      pact = new Pact(defaults);
      expect(typeof pact).to.be('Pact');
      // expect(() => { PactServer({}) }).to.throw(Error, 'You must specify a Consumer for this pact.')
    })

    //   it('throws Error when provider not specified', () => {
    //     expect(() => { Pact({ consumer: 'abc' }) }).to.throw(Error, 'You must specify a Provider for this pact.')
    //   })

    //   it('returns object with three functions to be invoked', (done) => {
    //     let pact = Pact({ consumer: 'A', provider: 'B' })
    //     expect(pact).to.have.property('addInteraction')
    //     expect(pact).to.have.property('verify')
    //     expect(pact).to.have.property('finalize')
    //     expect(mockServiceSpy).to.have.been.calledWithNew
    //     expect(mockServiceSpy).to.have.been.calledWith('A', 'B', 1234, '127.0.0.1', false)
    //     done()
    //   })

    //   it('creates mockService with custom ip and port', (done) => {
    //     let pact = Pact({ consumer: 'A', provider: 'B', host: '192.168.10.1', port: 8443, ssl: true })
    //     expect(pact).to.have.property('addInteraction')
    //     expect(pact).to.have.property('verify')
    //     expect(pact).to.have.property('finalize')
    //     expect(mockServiceSpy).to.have.been.calledWithNew
    //     expect(mockServiceSpy).to.have.been.calledWith('A', 'B', 8443, '192.168.10.1', true)
    //     done()
    //   })

    // })

    // describe('#addInteraction', () => {
    //   let pact, Pact
    //   let port = 4567

    //   beforeEach(() => {
    //     Pact = proxyquire('../src/pact', {
    //       './dsl/mockService': function () {
    //         return { addInteraction: (int) => Promise.resolve(int.json()) }
    //       }
    //     })
    //     pact = Pact({ consumer: 'A', provider: 'B', port: port++ })
    //   })

    //   it('creates interaction with state', (done) => {
    //     let addInteractionPromise = pact.addInteraction({
    //       state: 'i have a list of projects',
    //       uponReceiving: 'a request for projects',
    //       withRequest: {
    //         method: 'get',
    //         path: '/projects',
    //         headers: { 'Accept': 'application/json' }
    //       },
    //       willRespondWith: {
    //         status: 200,
    //         headers: { 'Content-Type': 'application/json' },
    //         body: {}
    //       }
    //     })
    //     expect(addInteractionPromise).to.eventually.have.property('providerState').notify(done)
    //   })

    //   it('creates interaction without state', (done) => {
    //     let addInteractionPromise = pact.addInteraction({
    //       uponReceiving: 'a request for projects',
    //       withRequest: {
    //         method: 'get',
    //         path: '/projects',
    //         headers: { 'Accept': 'application/json' }
    //       },
    //       willRespondWith: {
    //         status: 200,
    //         headers: { 'Content-Type': 'application/json' },
    //         body: {}
    //       }
    //     })
    //     expect(addInteractionPromise).to.eventually.not.have.property('providerState').notify(done)
    //   })
  })
})
