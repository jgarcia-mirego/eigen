#import <Foundation/Foundation.h>


// All the options as consts
extern NSString *const AROptionsDebugARVIR;
extern NSString *const AROptionsDevReactEnv;
extern NSString *const AROptionsDisableNativeLiveAuctions;
extern NSString *const AROptionsShowAnalyticsOnScreen;
extern NSString *const AROptionsShowMartsyOnScreen;
extern NSString *const AROptionsStagingReactEnv;
extern NSString *const AROptionsTappingPartnerSendsToPartner;



@interface AROptions : NSObject

/// Returns all the current options
+ (NSArray *)labsOptions;
// Special cases
+ (NSArray *)labsOptionsThatRequireRestart;
// For UIs
+ (NSString *)descriptionForOption:(NSString *)option;
/// A dictionary of lab options to true/false as NSNumbers for Emission basically
+ (NSDictionary *)labOptionsMap;

/// Get and set individual options
+ (BOOL)boolForOption:(NSString *)option;
+ (void)setBool:(BOOL)value forOption:(NSString *)option;
/// Gives you the ability to verify something exists
+ (BOOL)optionExists:(NSString *)option;


@end
