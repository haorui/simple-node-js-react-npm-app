import * as jose from 'jose';
import logo from './logo.svg';
import './App.css';

export default function App() {
  var JWKS;
  var handleClick = async() =>  {
    console.log('click');
    const secret = new TextEncoder().encode(
      'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
    )
    const jwt =
      'eyJhbGciOiJIUzI1NiJ9.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjY5MDU2MjMxLCJpc3MiOiJ1cm46ZXhhbXBsZTppc3N1ZXIiLCJhdWQiOiJ1cm46ZXhhbXBsZTphdWRpZW5jZSJ9.C4iSlLfAUMBq--wnC6VqD9gEOhwpRZpoRarE0m7KEnI'
    
    const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, {
      issuer: 'urn:example:issuer',
      audience: 'urn:example:audience',
    })
    
    console.log(protectedHeader)
    console.log(payload)
  }

  var handleSPKIClick = async() =>  {
    console.log('handleSPKIClick');
    const alg = 'RS256'
    const spki = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwhYOFK2Ocbbpb/zVypi9
    SeKiNUqKQH0zTKN1+6fpCTu6ZalGI82s7XK3tan4dJt90ptUPKD2zvxqTzFNfx4H
    HHsrYCf2+FMLn1VTJfQazA2BvJqAwcpW1bqRUEty8tS/Yv4hRvWfQPcc2Gc3+/fQ
    OOW57zVy+rNoJc744kb30NjQxdGp03J2S3GLQu7oKtSDDPooQHD38PEMNnITf0pj
    +KgDPjymkMGoJlO3aKppsjfbt/AH6GGdRghYRLOUwQU+h+ofWHR3lbYiKtXPn5dN
    24kiHy61e3VAQ9/YAZlwXC/99GGtw/NpghFAuM4P1JDn0DppJldy3PGFC0GfBCZA
    SwIDAQAB
    -----END PUBLIC KEY-----`
    const publicKey = await jose.importSPKI(spki, alg)
    const jwt =
      'eyJhbGciOiJSUzI1NiJ9.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjY5MDU2NDg4LCJpc3MiOiJ1cm46ZXhhbXBsZTppc3N1ZXIiLCJhdWQiOiJ1cm46ZXhhbXBsZTphdWRpZW5jZSJ9.gXrPZ3yM_60dMXGE69dusbpzYASNA-XIOwsb5D5xYnSxyj6_D6OR_uR_1vqhUm4AxZxcrH1_-XJAve9HCw8az_QzHcN-nETt-v6stCsYrn6Bv1YOc-mSJRZ8ll57KVqLbCIbjKwerNX5r2_Qg2TwmJzQdRs-AQDhy-s_DlJd8ql6wR4n-kDZpar-pwIvz4fFIN0Fj57SXpAbLrV6Eo4Byzl0xFD8qEYEpBwjrMMfxCZXTlAVhAq6KCoGlDTwWuExps342-0UErEtyIqDnDGcrfNWiUsoo8j-29IpKd-w9-C388u-ChCxoHz--H8WmMSZzx3zTXsZ5lXLZ9IKfanDKg'

    const { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey, {
      issuer: 'urn:example:issuer',
      audience: 'urn:example:audience',
    })

    console.log(protectedHeader)
    console.log(payload)
  }

  var handleJWKClick = async() =>  {
    console.log('handleJWKClick');
    const alg = 'RS256'
    const jwk = {
      kty: 'RSA',
      n: 'whYOFK2Ocbbpb_zVypi9SeKiNUqKQH0zTKN1-6fpCTu6ZalGI82s7XK3tan4dJt90ptUPKD2zvxqTzFNfx4HHHsrYCf2-FMLn1VTJfQazA2BvJqAwcpW1bqRUEty8tS_Yv4hRvWfQPcc2Gc3-_fQOOW57zVy-rNoJc744kb30NjQxdGp03J2S3GLQu7oKtSDDPooQHD38PEMNnITf0pj-KgDPjymkMGoJlO3aKppsjfbt_AH6GGdRghYRLOUwQU-h-ofWHR3lbYiKtXPn5dN24kiHy61e3VAQ9_YAZlwXC_99GGtw_NpghFAuM4P1JDn0DppJldy3PGFC0GfBCZASw',
      e: 'AQAB',
    }
    const publicKey = await jose.importJWK(jwk, alg)
    const jwt =
      'eyJhbGciOiJSUzI1NiJ9.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjY5MDU2NDg4LCJpc3MiOiJ1cm46ZXhhbXBsZTppc3N1ZXIiLCJhdWQiOiJ1cm46ZXhhbXBsZTphdWRpZW5jZSJ9.gXrPZ3yM_60dMXGE69dusbpzYASNA-XIOwsb5D5xYnSxyj6_D6OR_uR_1vqhUm4AxZxcrH1_-XJAve9HCw8az_QzHcN-nETt-v6stCsYrn6Bv1YOc-mSJRZ8ll57KVqLbCIbjKwerNX5r2_Qg2TwmJzQdRs-AQDhy-s_DlJd8ql6wR4n-kDZpar-pwIvz4fFIN0Fj57SXpAbLrV6Eo4Byzl0xFD8qEYEpBwjrMMfxCZXTlAVhAq6KCoGlDTwWuExps342-0UErEtyIqDnDGcrfNWiUsoo8j-29IpKd-w9-C388u-ChCxoHz--H8WmMSZzx3zTXsZ5lXLZ9IKfanDKg'

    const { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey, {
      issuer: 'urn:example:issuer',
      audience: 'urn:example:audience',
    })

    console.log(protectedHeader)
    console.log(payload)
  }

  var handleRemoteClick = async() =>  {
    console.log('handleRemoteClick');
    const jwt_exp =
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRQRmFnYnhObW1KM21zdHk2RXpuTmV1WGhpTE5LMGpmSlZhdlZDWXZtRWMifQ.eyJzdWIiOiJhZG1pbiIsImF0X2hhc2giOiJieVdkQncySVdlMmtSTUdpQ2puS0xBIiwiYXVkIjoiNjU0OGUxZjhkZmYyMWFhNmY2NWUxNTlkIiwiZXhwIjoxNzA5MDQ4MTE5LCJpYXQiOjE3MDkwNDQ1MTksImlzcyI6Imh0dHBzOi8vc3NvLmRhdGFsZWFwaW5mby5jb20ifQ.BxlQHgCPsj_RTWMth3HO_FJ-GR0CGr7XEGuaIFqeYvnjy3skBdisgTvNTYW4KhgmF9icS7obxUdA65KlINm9yQNAy2atysHRZ6WQJfWIueASHTgidsB5Hh1L-mIVO8cpIjRhegFiSiIxi5C7fP0bhFPe2FXyoGcQACkVBwRqDlmT3zhcvevGn9KKw4GjNAul3xV48oRbdgyZ48GYg8OTAQCIa-EEY46U_JrjHDT1YLRd0TBR7xgdgJ3wxtEGY2gH9oKiMnSDdahUSW6HSpYi5a_f_fxP-nUDqYzkofzTvWZzV59R3uICbD6X5kXUPRU_HySQYiWZ-8aM9gUXSE23lQ';
    const jwt = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRQRmFnYnhObW1KM21zdHk2RXpuTmV1WGhpTE5LMGpmSlZhdlZDWXZtRWMifQ.eyJzdWIiOiJhZG1pbiIsImF0X2hhc2giOiJQdVFQY2huZTRrYW0tcTRGWmUwQl9RIiwiYXVkIjoiNjU0OGUxZjhkZmYyMWFhNmY2NWUxNTlkIiwiZXhwIjoxNzA5MTA4OTI5LCJpYXQiOjE3MDkxMDUzMjksImlzcyI6Imh0dHBzOi8vc3NvLmRhdGFsZWFwaW5mby5jb20ifQ.L2TmWX-w4HobOHnwiL2DY9HPSgIvExxSHtx7uBEw_ArsrSFlQ4qLCR3kGtlwWRiDgqEi8vP8Lftr1j_CcM-5t4xkoXjc-wMikyN1BKB0NDFoMJqNsK97u2VZSVZIcDfRFzMYEfeiwQXNxQGiBuK7CYKIw0-KMhxq_VJfBoFEszeMEFnRzzWKsVMj2qvQyHZniHX3MdXN6yDHcrC6Bp5GSxOsJ7x3E1DkVdeTmShd6t929TxsZ6BKzVkw94txZeLD8Uc3pL3NOCiG6itvPuAHHSXYMvPzRdJ_aDU7TWM6TQXXsdP8PAvqEcCpZEQ5D9fD3QmJyFsjwVfzFJC_dU07jg';

    try {
      if (!JWKS) {
        JWKS = jose.createRemoteJWKSet(new URL('https://sso.dataleapinfo.com/jwks'));
      }
      const { payload, protectedHeader } = await jose.jwtVerify(jwt, JWKS, {
        issuer: 'https://sso.dataleapinfo.com',
      })
      console.log(protectedHeader)
      console.log(payload)
    } catch (error) {
      console.error(error);
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={handleClick}>Test Jwt</button>
      <button onClick={handleSPKIClick}>Test Jwt(spki)</button>
      <button onClick={handleJWKClick}>Test Jwt(public JWK)</button>
      <button onClick={handleRemoteClick}>Test Jwt(public JWKs on a remote URL)</button>
    </div>
  );
}
