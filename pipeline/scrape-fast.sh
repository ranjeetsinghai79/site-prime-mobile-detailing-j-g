#!/usr/bin/env bash
# scrape-fast.sh — 10 priority tabs, NO email enrichment (5-10x faster)
# Enrich emails separately during the day:
#   ENRICH_LIMIT=99999 npx tsx src/scripts/enrich-existing-rows.ts
#
# Usage: ./scrape-fast.sh [TARGET_PER_TAB]
# Default 1000/tab  →  10,000 leads/day, ~20 hours runtime
#
# Tab capacity after city expansion (340 cities):
#   Local SMBs       : 7 niches × 340 × 60 = ~142,800 max  (17k used — ~125k left)
#   MEDSPAS          : 1 niche  × 340 × 60 = ~20,400  max  (9k used  — ~11k left)
#   USA_Salons       : 2 niches × 340 × 60 = ~40,800  max  (1k used  — ~40k left)
#   USA_BarberShops  : 1 niche  × 340 × 60 = ~20,400  max  (1k used  — ~19k left)
#   USA_NailStudios  : 1 niche  × 340 × 60 = ~20,400  max  (1k used  — ~19k left)
#   USA_SkinClinics  : 1 niche  × 340 × 60 = ~20,400  max  (1k used  — ~19k left)
#   USA_IVTherapy    : 1 niche  × 340 × 60 = ~20,400  max  (1k used  — ~19k left)
#   USA_DentalOffices: 1 niche  × 340 × 60 = ~20,400  max  (10k used — ~10k left)
#   USA_Restaurants  : 1 niche  × 340 × 60 = ~20,400  max  (11k used — ~9k left)
#   USA_FinancialAdvisors: 2 niches × 340 × 60 = ~40,800 max (1k used — ~40k left)
# Total available: ~364k → target 284k = ~28 days at 10k/day

set -euo pipefail

TARGET=${1:-1000}
LOG_FILE="scrape-fast-$(date +%Y-%m-%d).log"
START_TIME=$(date +%s)

cd "$(dirname "$0")"

log() { echo "[$(date '+%H:%M:%S')] $*" | tee -a "$LOG_FILE"; }

run_tab() {
  local tab="$1"
  log "▶ START: $tab (target=$TARGET, email=OFF)"
  SHEET_TAB="$tab" SCRAPE_TARGET="$TARGET" SKIP_EMAIL_ENRICHMENT=true \
    npx tsx src/scripts/scrape-universal.ts 2>&1 | tee -a "$LOG_FILE"
  log "✓ DONE:  $tab"
}

TABS=10
log "════════════════════════════════════════════════════════════════"
log "FAST SCRAPE — $TARGET per tab × $TABS tabs, no email fetch"
log "Log: $LOG_FILE"
log "Estimate: ~$(( TARGET * TABS )) total leads, ~18-22 hours"
log "Priority: LocalSMBs → Medspas → Beauty/Wellness → Dental → Restaurants → Finance"
log "════════════════════════════════════════════════════════════════"

# Tier 1: Highest volume potential
run_tab "Local SMBs"
run_tab "MEDSPAS"

# Tier 2: Beauty & Wellness (high conversion)
run_tab "USA_Salons"
run_tab "USA_BarberShops"
run_tab "USA_NailStudios"
run_tab "USA_SkinClinics"
run_tab "USA_IVTherapy"

# Tier 3: Service businesses
run_tab "USA_DentalOffices"
run_tab "USA_Restaurants"
run_tab "USA_FinancialAdvisorsandInsuranceAgents"

END_TIME=$(date +%s)
ELAPSED=$(( (END_TIME - START_TIME) / 60 ))
log "════════════════════════════════════════════════════════════════"
log "DONE — elapsed: ${ELAPSED} min, ~$(( TARGET * TABS )) new leads added"
log "Run enrich tomorrow: ENRICH_LIMIT=99999 npx tsx src/scripts/enrich-existing-rows.ts"
log "════════════════════════════════════════════════════════════════"
