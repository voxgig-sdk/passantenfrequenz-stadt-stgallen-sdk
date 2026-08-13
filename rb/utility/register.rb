# PassantenfrequenzStadtStgallen SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

PassantenfrequenzStadtStgallenUtility.registrar = ->(u) {
  u.clean = PassantenfrequenzStadtStgallenUtilities::Clean
  u.done = PassantenfrequenzStadtStgallenUtilities::Done
  u.make_error = PassantenfrequenzStadtStgallenUtilities::MakeError
  u.feature_add = PassantenfrequenzStadtStgallenUtilities::FeatureAdd
  u.feature_hook = PassantenfrequenzStadtStgallenUtilities::FeatureHook
  u.feature_init = PassantenfrequenzStadtStgallenUtilities::FeatureInit
  u.fetcher = PassantenfrequenzStadtStgallenUtilities::Fetcher
  u.make_fetch_def = PassantenfrequenzStadtStgallenUtilities::MakeFetchDef
  u.make_context = PassantenfrequenzStadtStgallenUtilities::MakeContext
  u.make_options = PassantenfrequenzStadtStgallenUtilities::MakeOptions
  u.make_request = PassantenfrequenzStadtStgallenUtilities::MakeRequest
  u.make_response = PassantenfrequenzStadtStgallenUtilities::MakeResponse
  u.make_result = PassantenfrequenzStadtStgallenUtilities::MakeResult
  u.make_point = PassantenfrequenzStadtStgallenUtilities::MakePoint
  u.make_spec = PassantenfrequenzStadtStgallenUtilities::MakeSpec
  u.make_url = PassantenfrequenzStadtStgallenUtilities::MakeUrl
  u.param = PassantenfrequenzStadtStgallenUtilities::Param
  u.prepare_auth = PassantenfrequenzStadtStgallenUtilities::PrepareAuth
  u.prepare_body = PassantenfrequenzStadtStgallenUtilities::PrepareBody
  u.prepare_headers = PassantenfrequenzStadtStgallenUtilities::PrepareHeaders
  u.prepare_method = PassantenfrequenzStadtStgallenUtilities::PrepareMethod
  u.prepare_params = PassantenfrequenzStadtStgallenUtilities::PrepareParams
  u.prepare_path = PassantenfrequenzStadtStgallenUtilities::PreparePath
  u.prepare_query = PassantenfrequenzStadtStgallenUtilities::PrepareQuery
  u.graphql_body = PassantenfrequenzStadtStgallenUtilities::GraphqlBody
  u.graphql_errors = PassantenfrequenzStadtStgallenUtilities::GraphqlErrors
  u.result_basic = PassantenfrequenzStadtStgallenUtilities::ResultBasic
  u.result_body = PassantenfrequenzStadtStgallenUtilities::ResultBody
  u.result_headers = PassantenfrequenzStadtStgallenUtilities::ResultHeaders
  u.transform_request = PassantenfrequenzStadtStgallenUtilities::TransformRequest
  u.transform_response = PassantenfrequenzStadtStgallenUtilities::TransformResponse
}
