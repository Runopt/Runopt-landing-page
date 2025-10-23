export default function NewsletterContent() {
  return (
    <div className="newsletter-content">
      {/* Newsletter Header */}
      <div className="newsletter-header">
        <h1 className="newsletter-title">Runopt Newsletter</h1>
        <div className="newsletter-intro">
          <p className="intro-text">Hi Everyone! Welcome to the first newsletter from Runopt.</p>
          <p className="intro-description">In this first newsletter, we aim to provide insights on:</p>
          <ul className="insights-list">
            <li>Relevant DOE policies affecting data center development</li>
            <li>County-specific regulations or incentives</li>
            <li>An overview of the local power grid, including key utilities and government programs</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Image Section */}
      <div className="newsletter-image-section">
        <div className="image-container">
          <img 
            src="/images/newsletterImage.png" 
            alt="Runopt Newsletter - Site Selection Interface" 
            className="newsletter-image"
          />
        </div>
      </div>

      {/* Update Section */}
      <div className="update-section">
        <div className="update-content">
          <h2 className="update-title">San Francisco/Bay Area Update</h2>
          <p className="update-intro">
            Below is a briefing designed for industry professionals focused on actionable requirements and opportunities:
          </p>
          
          <div className="policy-section">
            <h3 className="policy-title">DOE and Federal Policy Implications</h3>
            <p className="policy-text">
            The Department of Energy (DOE) and the federal government are driving new initiatives to streamline data center infrastructure, especially those powering artificial intelligence.
            </p>
            <p className="policy-text">
            As many of us already know, on July 23, 2025, a recent Executive Order directs expedited federal permitting, prioritizes siting on federal land, and targets projects over 100MW, notably fast-tracking AI-related builds. (<a href="https://www.whitehouse.gov/presidential-actions/2025/07/accelerating-federal-permitting-of-data-center-infrastructure/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="reference-link">The White House</a>)
            </p>
            <p className="policy-text">
            The DOE is also investing in grid reliability, flexible load management, and encouraging innovative power solutions through loan guarantees and tax incentives. These initiatives can significantly cut permitting timelines for projects qualifying under federal guidelines. (<a href="https://www.pillsburylaw.com/en/news-and-insights/AI-data-center-DOE-site-trump.html" target="_blank" rel="noopener noreferrer" className="reference-link">DOE</a>)
            </p>
          </div>

          <div className="policy-section">
            <h3 className="policy-title">California and County-Specific Regulations</h3>
            <p className="policy-text">
            California's new legislative package introduces strict measures on data centers for energy efficiency, carbon sourcing, and transparency through bills like AB 222 and AB 93.
            </p>
            
            <div className="bill-section">
              <h4 className="bill-title">[Disclosure] Passed Bill - AB 222</h4>
              <ul className="bill-requirements">
                <li>Data centers must report energy and water usage, and participate in demand response and load management. (<a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB222" target="_blank" rel="noopener noreferrer" className="reference-link">AB222</a>   )</li>
                <li>New efficiency standards and greenhouse gas reduction targets will apply to new builds and major remodels by 2027.</li>
                <li>The Public Utilities Commission (PUC) will ensure data center construction costs are fair and primarily borne by direct beneficiaries, not by unrelated ratepayers.</li>
              </ul>
            </div>

            <div className="bill-section">
              <h4 className="bill-title">[Water] Passed Legislature, Pending Governor's Signature - AB 93 Update for Data Centers</h4>
              <div className="water-requirements">
                <h5 className="requirement-subtitle">State Guidelines Coming by 2028:</h5>
                <p className="policy-text">
                The California State Water Board and Energy Commission will develop guidelines and best practices to optimize data center water usage, aligning with urban water efficiency goals and the Energy Star program. (<a href="https://trackbill.com/s3/bills/CA/2025/AB/93/analyses/assembly-local-government.pdf" target="_blank" rel="noopener noreferrer" className="reference-link">AB93</a>)
                </p>
                
                <h5 className="requirement-subtitle">Water Reporting <a href="https://a21.asmdc.org/press-releases/20250911-papan-bill-track-data-center-water-use-wins-final-legislative-approval" target="_blank" rel="noopener noreferrer" className="reference-link">Requirements</a> for Licenses:</h5>
                <ul className="bill-requirements">
                  <li><strong>New Applications:</strong> Require an estimate of annual water use (under penalty of perjury).</li>
                  <li><strong>Renewals:</strong> Require reporting of actual water usage for the previous year.</li>
                </ul>
              </div>
              <p className="policy-text">
            California's new water disclosure bill (AB 93), combined with local mandates (like Santa Clara's required use of recycled water, and Contra Costa County strongly encouraging the use of industrial recycled water for cooling), reinforces the growing regulatory focus on water accountability and sustainability for data centers. (<a href="https://scvwd.legistar.com/LegislationDetail.aspx?FullText=1&GUID=9DDD4486-D46A-462F-9025-96C2E72A67E9&ID=7405457" target="_blank" rel="noopener noreferrer" className="reference-link">Valley Water</a>)
            </p>
            </div>

            <div className="bill-section">
              <h4 className="bill-title">[Incentive] Proposed Bill - SB 58:</h4>
              <ul className="bill-requirements">
                <li>Introduces a sales tax exemption (max 2% for up to 20 years) for certified data centers investing over $200M, creating at least 20 new jobs, and relying increasingly on carbon-free and on-site power generation. (<a href="https://legiscan.com/CA/text/SB58/id/3044107" target="_blank" rel="noopener noreferrer" className="reference-link">SB 58</a>)</li>
                <li>Water usage standards require recycled water systems, while diesel-based backup power is prohibited for new projects. (<a href="https://theclimatecenter.org/wp-content/uploads/2025/05/SB-58-Ltr-of-Support-Clean-Data-Centers-05.08.2025.docx.pdf" target="_blank" rel="noopener noreferrer" className="reference-link">The Climate Center</a>)</li>
              </ul>
            </div>
           
          </div>

          <div className="policy-section">
            <h3 className="policy-title">Local Power Grid, Key Utilities, and Programs</h3>
            <p className="policy-text">
            California has over 260 sunny days and 300 hydroelectric facilities, making it the nation's <a href="https://www.integrityenergy.com/blog/the-top-10-states-paving-the-way-to-a-sustainable-energy-future/#:~:text=2.%20California%20%E2%80%93%20108%2C984%20GWh%20of,of%20its%20in%2Dstate%20generation." target="_blank" rel="noopener noreferrer" className="reference-link">second-largest producer</a> of green energy. The state's ambitious clean energy laws aim for 60% renewable by 2030 and 100% emission-free by 2045. The Bay Area grid, overseen by the California Independent System Operator (CAISO), faces aging infrastructure and rising demand due to electrification.
            </p>
            
            <div className="utilities-section">
              <h4 className="utilities-title">Main Utilities in the Region Include:</h4>
              
              <div className="utility-item">
                <h5 className="utility-name">Pacific Gas & Electric (PG&E), Southern California Edison, and San Diego Gas & Electric:</h5>
                <p className="policy-text">
                The three primary investor-owned utilities (IOUs) covering most of the Bay Area, under California Public Utilities Commission oversight. Utility Rule 21 violations are delaying interconnection for large-scale solar and storage, impacting data center clean energy goals and federal ITC deadlines. (<a href="https://calssa.org/press-releases/2025/8/29/solar-trade-group-asks-state-to-fine-utilities-10-million-for-violations" target="_blank" rel="noopener noreferrer" className="reference-link">CALSSA</a>)
                </p>
              </div>

              <div className="utility-item">
                <h5 className="utility-name">San Francisco Public Utilities Commission (SFPUC):</h5>
                <p className="policy-text">
                Offers CleanPowerSF (publicly owned, renewable-heavy) and Hetch Hetchy Power to municipal customers. These services generally have lower rates and better stability compared to PG&E.
                </p>
              </div>

              <div className="utility-item">
                <h5 className="utility-name">Silicon Valley Power (Santa Clara):</h5>
                <p className="policy-text">
                Silicon Valley Power has reached its current capacity for new data centers. Grid expansions are expected to complete by 2029. (<a href="https://sanjosespotlight.com/santa-clara-data-centers-hit-max-energy-capacity/" target="_blank" rel="noopener noreferrer" className="reference-link">San José Spotlight</a>)
                </p>
              </div>
            </div>

            <p className="policy-text">
            California's grid modernization strategy mandates renewables integration, substantial transmission upgrades, and increased resilience. Recent legislation provides substantial rebates to reduce electricity costs and advance decarbonization. PG&E and municipal utilities encourage demand-response participation and on-site renewable deployment to improve project viability and compliance with state rules.
            </p>
          </div>

          <div className="policy-section">
            <h3 className="policy-title">Actionable Points for Data Center Developers</h3>
            <ul className="actionable-list">
              <li className="actionable-item">
                <span className="actionable-icon">📋</span>
                <div className="actionable-content">
                  Prioritize early engagement with the California Energy Commission and local utilities for state and local permitting. Verify grid capacity and compliance, and plan for robust reporting, carbon targets, and water use standards.
                </div>
              </li>
              <li className="actionable-item">
                <span className="actionable-icon">🏙️</span>
                <div className="actionable-content">
                  In San Francisco, consider public power options for lower, steadier rates and improved clean energy sourcing. In Santa Clara, explore city utility incentives for renewable and grid-friendly load management.
                </div>
              </li>
              <li className="actionable-item">
                <span className="actionable-icon">💰</span>
                <div className="actionable-content">
                  Confirm project eligibility for SB 58 and similar incentives by focusing investment in single-county, job-generating, and carbon-free projects with innovative on-site energy use.
                </div>
              </li>
            </ul>
          </div>

          <div className="policy-section">
            <h3 className="policy-title">What Caught My Eye</h3>
            <ol className="insights-list">
              <li className="insight-item">
                <div className="insight-content">
                  <strong>Growing trend of repurposing crypto mining facilities:</strong> This trend reflects the market's search for ready-made infrastructure with existing load capacity, serving as a potential shortcut to avoid permitting delays. <span className="reference">(<a href="https://www.gravel2gavel.com/designing-constructing-converting-data-centers-crypto-mines/" target="_blank" rel="noopener noreferrer" className="reference-link">Designing, Constructing and Converting Data Centers and Crypto Mine</a>)</span>
                </div>
              </li>
              <li className="insight-item">
                <div className="insight-content">
                  <strong>Bay Area startups exploring underwater data centers:</strong> These projects face strict permitting requirements due to potential environmental impacts on water and wildlife. <span className="reference">(<a href="https://www.wired.com/story/networkocean-datacenter-san-francisco-bay-environment" target="_blank" rel="noopener noreferrer" className="reference-link">WIRED</a>)</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Newsletter Footer */}
      <div className="newsletter-footer">
        <div className="footer-content">
          <p className="footer-text">
            Stay tuned for more insights on data center development, regulatory updates, and market opportunities.
          </p>
          <div className="footer-signature">
            <span className="signature-text">The Runopt Team</span>
          </div>
        </div>
      </div>
    </div>
  );
}
